import React from "react";
import styled from "styled-components";
import { Pie } from "@ant-design/charts";

const Wrapper = styled.div`
  margin: 64px 32px;
`;

const pieChartData = [
    {
        type: "new",
        value: 40,
    },
    {
        type: "evaluating",
        value: 25,
    },
    {
        type: "ongoing",
        value: 22,
    },
    {
        type: "finished",
        value: 22,
    },
    {
        type: "archived",
        value: 10,
    },
];

const config = {
    appendPadding: 10,
    data: pieChartData,

    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.5,
    label: {
        type: "inner",
        offset: "-50%",
        content: "{value}",
        style: {
            textAlign: "center",
            fontSize: 14,
        },
    },
    shape: "square",
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
        title: false,
        content: {
            style: {
                whiteSpace: "pre-wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            },
            formatter: function formatter() {
                return "\n";
            },
        },
    },
};

function PieChart() {
    return (
        <Wrapper>
            <Pie {...config} />
        </Wrapper>
    );
}

export default PieChart;
