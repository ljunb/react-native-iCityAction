/**
 * Created by ljunb on 16/5/9.
 * 新闻分类菜单条
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import CategoryItem from '../components/category_item';

export default class CategoryMenu extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedCategoryIndex: 0,
        }
    }
    
    
    render() {
        
        let { categories } = this.props;
        
        return (
            <ScrollView
                horizontal={true}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                style={styles.scrollView}
            >
                {
                    categories.map((category, i) => {
                        return (
                            <CategoryItem
                                key={i}
                                selected={i === this.state.selectedCategoryIndex}
                                category={category}
                                touchAction={this._handleTouch.bind(this, i)}
                            />
                        )
                    })}
            </ScrollView>
        )
    }

    // 单击菜单Item
    _handleTouch(index) {
        
        // 将选择的分类回传给news组件
        var category = this.props.categories[index];

        if (this.props.fetchNewsList) {
            this.props.fetchNewsList(category);
        }

        // 更新菜单Item UI
        this.setState({
            selectedCategoryIndex: index,
        });
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        height: 40,
    },

})