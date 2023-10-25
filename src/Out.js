import React from 'react';
// import 'antd/dist/antd.css'; // Import Ant Design CSS
import { Card, Table, Button, Layout, Typography, Steps, Divider } from 'antd';
import {
    CloseCircleOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const { Header, Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;


const OrderPage = () => {
    const navigate = useNavigate();
    
    const handleBoxClose = () => {
        // Define the logic to close the box (e.g., hide it)
        // You can set some state to conditionally render the box
      
        // Navigate to the root path ("/")
        navigate('/');        
    };
    
    const dockets = [
        {
            docketNo: 'L123456789',
            consignor: 'RAW PRESSERY PRIVSTE IMITED',
            consignor_Address: 'Y-36, OKHLA INDUSTRIAL AREA PHASE-II, OKHLA,New Delhi, South East Delhi, Delhi, 110020',
            consignee: 'Balarema Agencies-Kerela Distributor',
            consignee_Address: 'Vallikkad, Muttungal, Vadakara nIV -436 G, IV -336H,OMEGA Building nKozhikode,-,673104',
            shipmentBookedDate: '2023-09-01T14:55:05.000Z',
        },
        // Add more dockets as needed
    ];

    const tableData = [
        {
            dateTime: '2023-09-09T19:24:01.000Z',
            location: 'BLR',
            status: 'Delivered Successfully',
        },
        {
            dateTime: '2023-09-04T18:57:39.000Z',
            location: 'BLR',
            status: 'Branching Out Carting',
        },
        {
            dateTime: '2023-09-04T18:57:02.000Z',
            location: 'BLR',
            status: 'Picked up',
        },
        {
            dateTime: '2023-09-01T14:55:05.000Z',
            location: 'BLR',
            status: 'Consignment Booked',
        },
        // Add more table data as needed
    ];

    const trackingSteps = [
        {
            title: 'Consignment Booked',
            description: 'Your order has been placed.',
            icon: <img src={'icons/searching.png'} alt="booked" style={{ width: '40px' }} />
        },
        {
            title: 'Picked up',
            description: 'Your order is on the way to the destination.',
            icon: <img src={'icons/open.png'} alt="booked" style={{ width: '40px' }} />
        },
        {
            title: 'Branch out Carting',
            description: 'Your order is on the way to the destination.',
            icon: <img src={'icons/delivery-truck.png'} alt="booked" style={{ width: '40px' }} />
        },
        {
            title: 'Delivered Successfully',
            description: 'Your order has been delivered.',
            icon: <img src={'icons/check-box-with-check-sign.png'} alt="booked" style={{ width: '40px' }} />
        },
    ];

    const columns = [
        {
            title: 'Date/Time',
            dataIndex: 'dateTime',
            key: 'dateTime',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <Layout style={{ backgroundColor: 'white' }}>
            <CloseButton onClick={handleBoxClose}>
                        <CloseCircleOutlined />
                    </CloseButton>
            <div style={{ width: '50%', margin: '0 auto', marginTop: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Steps direction="horizontal" labelPlacement="vertical" current={2}>
                    {trackingSteps.map((step, index) => (
                        <Step
                            key={index}
                            title={step.title}
                            description={''}
                            icon={step.icon}
                        />
                    ))}
                </Steps>
            </div>
            <Content style={{ padding: '20px' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', background: '#47b3e4', padding: '30px', marginTop: '5%', marginLeft: '34%', marginBottom: '3%', borderRadius: '15px', textAlign: 'center', color: 'white', width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    Docket No: {dockets[0].docketNo}
                </div>
                <Card >
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: '25px', padding: '1px' }}>
                                <img src={'icons/box.png'} alt="My Icon" style={{ width: '12px' }} />
                            </div>
                            <div >
                                <span style={{ fontWeight: 'normal' }}>Consignor:</span><br />
                                <br />
                                <span style={{ fontWeight: 'bold' }}>{dockets[0].consignor}</span><br />

                                <wrapp>
                                    <p>{dockets[0].consignor_Address}</p>
                                </wrapp>
                            </div>
                        </div>
                        <div class="vertical-line" style={{ width: '3px', backgroundColor: '#e7e7e7' }}></div>

                        <Divider type="vertical" />

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: '25px', padding: '1px' }}>
                                    <img src={'icons/box.png'} alt="My Icon" style={{ width: '12px' }} />
                                </div>
                                <div >

                                    <span style={{ fontWeight: 'normal' }}>Consignee:</span><br />
                                    <br />
                                    <span style={{ fontWeight: 'bold' }}>{dockets[0].consignee}</span><br />

                                    <wrapp>
                                        <p>{dockets[0].consignee_Address}</p>
                                    </wrapp>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-line" style={{ width: '3px', backgroundColor: '#e7e7e7' }}></div>

                        <Divider type="vertical" />

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: '25px', padding: '1px' }}>
                                    <img src={'icons/time.png'} alt="My Icon" style={{ width: '12px' }} />
                                </div>
                                <div >
                                    <span style={{ fontWeight: '' }}>Shipment Booked Date:</span><br />
                                    <br />
                                    <span style={{ fontWeight: 'lighter' }}>{dockets[0].shipmentBookedDate}</span><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <div style={{ padding: '20px', justifyContent: 'center', alignItems: 'center' }}>

                    <Table dataSource={tableData} columns={columns} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Button type="primary">Download POD</Button>
                </div>

            </Content>
        </Layout>
    );
};

export default OrderPage;
