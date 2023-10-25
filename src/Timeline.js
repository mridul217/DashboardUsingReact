import React from 'react';
import { Steps } from 'antd';
import {
  FileAddOutlined,
  CarOutlined,
  ShoppingOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { Step } = Steps;

const TrackingSteps = () => {
  return (
    <div style={{ width: '50%', margin: '0 auto', marginTop: '2%', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Steps direction="horizontal" labelPlacement="vertical">
        <Step
          title="Consignment Booked"
          icon={<FileAddOutlined />}
          status="finish"
        />
        <Step
          title="Picked Up"
          icon={<ShoppingOutlined />}
          status="finish"
        />
        <Step
          title="Branch out Carting"
          icon={<CarOutlined />}
          status="finish"
        />
        <Step
          title="Delivered Successfully"
          icon={<HomeOutlined />}
          status="wait"
        />
      </Steps>
      <div style={{ background: '#47b3e4', padding: '20px', marginTop:'5%',borderRadius: '15px', textAlign: 'center', color: 'white', width: '30%' }}>
        Docket No: L123456789
      </div>
    </div>
  );
};

export default TrackingSteps;
