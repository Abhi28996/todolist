import React, { useState, useEffect } from 'react';
import { SectionList,StyleSheet, Text, View, Dimensions, Button } from 'react-native';

const MySectionList = ({ data }) => {

    const getItemLayout = (data, index) => ({
        length: 50, // Adjust the item height as per your requirement
        offset: 50 * index,
        index,
    });

    const renderSectionHeader =  React.useCallback(({ section: { title, completed } }) => (
        <View style={{ backgroundColor: '#303030', padding: 10 }}>
            <Text style={{color :'white'}}>{title}</Text>
        </View>
    ),[])

   


    const renderItem = React.useCallback(
        ({ item }) => {

            return(
            <View style={styles.renderItemBox}>
            <Text>ID:- {item.id}</Text>

            <Text>Title :- {item.title}</Text>

            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'600',fontSize:15}}>Status :-</Text> 
                <Text style={{ color: item.completed ? 'green' : 'red',fontWeight:'500',fontSize:14 }}>{ item.completed ? 'Completed':'Not Completed' }</Text>
            </View>

        </View>)
        },
        []
      );
    return (
        <SectionList
            sections={Object.entries(data).map(([key, value]) => ({
                title: `User ID: ${key}`,
                data: value,
            }))}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            getItemLayout={getItemLayout}
            windowSize={10}
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}

        />
    );
};

export default MySectionList;
export const MemoizedMyFlatList = React.memo(MySectionList);


const styles = StyleSheet.create({

    renderItemBox:{ padding: 10, margin: 3, backgroundColor: '#30303020', borderColor: 'gray', zIndex: 5, borderRadius: 1, height: 100 }
  })