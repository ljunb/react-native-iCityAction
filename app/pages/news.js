/**
 * Created by ljunb on 16/5/8.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

import Header from '../components/header';
import {NEWS_CATEGORIES_URL} from '../common/constants';
import HttpTool from '../common/util';

export default class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newsCategories: [],
            selectedCategoryIndex: 0,
        }
    }

    componentDidMount() {
        this._fetchNewsCategories();
    }

    // 获取所有新闻分类
    _fetchNewsCategories() {

        HttpTool.get(NEWS_CATEGORIES_URL, (response) => {

            let categories = response.item_list;

            this.setState({
                newsCategories: categories,
            });
        }, (error) => {

        });
    }

    render() {

        return (
            <View>
                <Header />
                <ScrollView
                    horizontal={true}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    style={styles.scrollView}
                >
                    {
                        this.state.newsCategories.map((category, i) => {
                            return (
                                <CategoryItem key={i} index={i} category={category} />
                            )
                        })}
                </ScrollView>
            </View>
        )
    }

}

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }

    render() {

        let index = this.props.index;
        let itemStyle = [styles.item];
        let itemTitle = [styles.title];

        if (index == 0) {
            itemStyle.push({borderBottomWidth: 2, borderBottomColor: 'red'});
            itemTitle.push({color: 'red'})
        }

        return (
            <View style={itemStyle}>
                <Text style={itemTitle}>{this.props.category.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        height: 40,
    },

    item: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
    },

    title: {
        fontSize: 14,
    }
})