import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { AppstoreOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Pie } from "@ant-design/charts";
import { Link } from 'react-router-dom'; // Import Link component


const Wrapper = styled.div`margin: 64px 32px;`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  border: 1px solid #ddd; /* Add your desired border styles */
  padding: 10px; /* Add your desired padding */
  border-radius: 8px; /* Add your desired border radius */
`;
const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;


const columns = [
    {
        title: 'Docket_No',
        dataIndex: 'Docket_No',
        key: 'name',
    },
    {
        title: 'From',
        dataIndex: 'From',
        key: 'age',
    },
    {
        title: 'To',
        dataIndex: 'To',
        key: 'address',
    },
    {
        title: 'Status',
        key: 'Status',
        dataIndex: 'Status',
        render: (_, { Status }) => (
            <>
                {Status.map((tag) => {
                    let color;
                    if (tag === 'In Transit') {
                        color = '#d07a7d';
                    }
                    if (tag === 'Consignment Booked') {
                        color = '#737d7c';
                    }
                    if (tag === 'Out for Delivery') {
                        color = '#4e7eca';
                    }
                    if (tag === 'Delivered Successfully') {
                        color = '#76b160';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
        <Link to="/order-page">
                <AppstoreOutlined />
            </Link>
            </Space >
        ),
    },
];

const statusColors = {
    'In Transit': '#d07a7d',
    'Consignment Booked': '#737d7c',
    'Out for Delivery': '#4e7eca',
    'Delivered Successfully': '#76b160',
};

const pieChartConfig = {
    appendPadding: 10,
    angleField: 'quantity',
    colorField: 'Status',
    radius: 1,
    innerRadius: 0.5,
    label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
            textAlign: 'center',
            fontSize: 14,
        },
    },
    interactions: [{ type: 'element-selected' }],
    statistic: {
        title: false,
        content: {
            style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            formatter: () => '',
        },
    },
    color: (d) => statusColors[d.Status],
};

const TableData = () => {
    const [tableData, setTableData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);


    const handleBoxClose = () => {
        // Define the logic to close the box (e.g., hide it)
        // You can set some state to conditionally render the box
    };

    const handlePieChartClick = (e) => {
        if (e.data) {
            setSelectedStatus(e.data.Status);
        }
    };

    useEffect(() => {
        const data = [
            {
                key: '1',
                Docket_No: 'L123456789',
                From: 'BLR',
                To: 'KER',
                Status: ['Consignment Booked'],
            },
            {
                key: '2',
                Docket_No: 'L123456789',
                From: 'BLR',
                To: 'KER',
                Status: ['Consignment Booked'],
            },
            {
                key: '3',
                Docket_No: 'L123456789',
                From: 'BLR',
                To: 'KER',
                Status: ['In Transit'],
            },
            {
                key: '4',
                Docket_No: 'L123456789',
                From: 'BLR',
                To: 'KER',
                Status: ['Out for Delivery'],
            },
            {
                key: '5',
                Docket_No: 'L123456789',
                From: 'BLR',
                To: 'KER',
                Status: ['Delivered Successfully'],
            },
        ];

        const statusQuantity = {};

        // Calculate the quantity of each status
        data.forEach((item) => {
            item.Status.forEach((status) => {
                statusQuantity[status] = (statusQuantity[status] || 0) + 1;
            });
        });

        // Prepare data for the pie chart
        const pieChartDataSource = Object.keys(statusQuantity).map((status) => ({
            Status: status,
            quantity: statusQuantity[status],
        }));
        console.log(selectedStatus);

        setTableData(data);
        setPieChartData(pieChartDataSource);
    }, []);

    return (
        <div>
            <Box>
                <Wrapper>
                    <CloseButton onClick={handleBoxClose}>
                        <CloseCircleOutlined />
                    </CloseButton>
                    <Flex>
                        <Pie {...pieChartConfig} data={pieChartData} onPlotClick={handlePieChartClick} />
                    </Flex>
                </Wrapper>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
                />
            </Box>
        </div>
    );
};

export default TableData;