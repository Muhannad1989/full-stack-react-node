import React, { useEffect } from "react";
import { List } from "antd";
import { useApi } from "../functions/apiCall";
import Error from "../components/error/Error";
import ListItem from "../components/list/ListItem";
import Spinner from "../components/spinner/Spinner";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const Users = () => {
  // save data with using use State Hooks
  const endpoint = `http://localhost:3000/users`;
  const { productionTable, loading, error, callApi } = useApi(endpoint);

  useEffect(() => {
    callApi();
  }, []);

  // in case there is no data
  if (loading) {
    return <Spinner />;
  }

  // // if there is an error
  if (error) {
    return <Error />;
  }

  // in case there is data
  return (
    <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      dataSource={productionTable}
      renderItem={item => <ListItem item={item} loading={loading} />}
    />
  );
};

export default Users;
