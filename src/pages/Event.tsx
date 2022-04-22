import React, {useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import {EventCalendar, EventForm} from "../components";

const Event = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <EventCalendar/>
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
          <EventForm/>
      </Row>
    </Layout>
  );
};

export default Event;