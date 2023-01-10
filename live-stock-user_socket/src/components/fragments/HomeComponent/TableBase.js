import React from "react";
import { FlatList, View } from "react-native";
import { Button, DataTable } from "react-native-paper";

export default function tableBase(props) {
  const { headers, renderItem, data } = props;

  const tableTitle = headers.map((item, key) => {
    return <DataTable.Title key={key}>{item}</DataTable.Title>;
  });
  // const TableRow = ({ code, price, volatility, tradingVolume }) => (
  //   <DataTable.Row>
  //     <DataTable.Cell>{code}</DataTable.Cell>
  //     <DataTable.Cell>{price}</DataTable.Cell>
  //     <DataTable.Cell>{volatility}</DataTable.Cell>
  //     <DataTable.Cell>{tradingVolume}</DataTable.Cell>
  //   </DataTable.Row>
  // );
  // const renderItem = ({ item }) => (
  //   <TableRow
  //     code={item.code}
  //     price={item.price}
  //     volatility={item.volatility}
  //     tradeVolume={item.tradeVolume}
  //   />
  // );
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DataTable>
        <DataTable.Header>{tableTitle}</DataTable.Header>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </DataTable>
    </View>
  );
}
