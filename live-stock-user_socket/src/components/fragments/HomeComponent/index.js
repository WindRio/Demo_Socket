import React, { useEffect, useState } from "react";
import { DataTable, TextInput, Button } from "react-native-paper";
import {
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import OptionsIcon from "react-native-vector-icons/SimpleLineIcons";

import TableCommon from "./TableBase";
import { title } from "./data";
import { useHooks } from "@/hooks/Composable/index";
import socket from "@/utils/hooks/useSocket";

export default function (props) {
  const { handleConnectSocket } = useHooks();
  const [listItems, setListItems] = useState([]);
  // useEffect(() => {
  //   handleConnectSocket(true);
  //   return () => {
  //     handleConnectSocket(false);
  //   };
  // }, []);
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log(socket.id, "Connecting...");
    });
    socket.on("loadData", (data) => {
      setListItems(data);
    });
    socket.emit("getData");
    return () => {
      socket.disconnect();
      console.log(socket.disconnected, "Disconnect.");
    };
  }, [socket]);
  const tableTitle = title.map((item, key) => (
    <DataTable.Title key={key}>{item}</DataTable.Title>
  ));
  const TableRow = ({ id, code, price, volatility, tradingVolume }) => (
    <DataTable.Row>
      <DataTable.Cell>{code}</DataTable.Cell>
      <DataTable.Cell>{price}</DataTable.Cell>
      <DataTable.Cell>{volatility}</DataTable.Cell>
      <DataTable.Cell>{tradingVolume}</DataTable.Cell>
      <DataTable.Cell>
        <OptionsIcon name="options-vertical" size={20} />
      </DataTable.Cell>
    </DataTable.Row>
  );
  const renderItem = ({ item }) => (
    <TableRow
      id={item._id}
      code={item.codeStock}
      price={item.marketPrice}
      volatility={item.volatility}
      tradingVolume={item.totalTransaction}
    />
  );
  const [codeStock, setCodeStock] = useState("");
  const [marketPrice, setMarketPrice] = useState(0);
  const [volatility, setVolatility] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);
  const handlePressCreate = () => {
    socket.emit("create", {
      codeStock: codeStock,
      marketPrice: marketPrice,
      volatility: volatility,
      totalTransaction: totalTransaction,
    });
  };
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View>
        <DataTable>
          <DataTable.Header>{tableTitle}</DataTable.Header>
          <FlatList
            data={listItems}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </DataTable>
        <TextInput
          label="Mã cổ phiếu"
          value={codeStock}
          onChangeText={(text) => setCodeStock(text)}
        />
        <TextInput
          label="Thị giá"
          value={marketPrice}
          onChangeText={(text) => setMarketPrice(text)}
        />
        <TextInput
          label="Biến động"
          value={volatility}
          onChangeText={(text) => setVolatility(text)}
        />
        <TextInput
          label="KLGG"
          value={totalTransaction}
          onChangeText={(text) => setTotalTransaction(text)}
        />
        <Button mode="contained" onPress={() => handlePressCreate()}>
          Create
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}
