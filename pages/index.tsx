import Head from "next/head";
import Image from "next/image";
import { Spacer, Table, Text } from "@nextui-org/react";
import { Modal, Container, Row, Button } from "@nextui-org/react";
import TotalCostImage from "../public/images/Unit-Cost.jpg";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const fixedCost: Highcharts.Options = {
  title: {
    text: "Fixed Cost",
    align: "left",
  },

  subtitle: {
    text: "",
    align: "left",
  },

  yAxis: {
    title: {
      text: "Cost",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Number of units",
    },
    tickInterval: 1,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 0,
    },
  },

  series: [
    {
      type: "line",
      name: "Fixed Cost",
      data: [30, 30, 30, 30, 30, 30, 30],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 100,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
const VariableCost: Highcharts.Options = {
  title: {
    text: "Variable Cost",
    align: "left",
  },

  subtitle: {
    text: "",
    align: "left",
  },

  yAxis: {
    title: {
      text: "Cost",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Number of units",
    },
    tickInterval: 1,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      type: "line",
      name: "Variable Cost",
      data: [0, 10, 18, 24, 32, 50, 72],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
const TotalCost: Highcharts.Options = {
  title: {
    text: "Total Cost",
    align: "left",
  },

  subtitle: {
    text: "",
    align: "left",
  },

  yAxis: {
    title: {
      text: "Cost",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Number of units",
    },
    tickInterval: 1,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      type: "line",
      name: "Total Cost",
      data: [30, 40, 48, 54, 62, 80, 102],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 100,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
const AverageCost: Highcharts.Options = {
  title: {
    text: "Average Cost",
    align: "left",
  },

  subtitle: {
    text: "",
    align: "left",
  },

  yAxis: {
    title: {
      text: "Cost",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Number of units",
    },
    tickInterval: 1,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      type: "line",
      name: "Average Cost",
      data: [null, 40, 24, 19, 15.5, 16, 17],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 100,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
const AllCosts: Highcharts.Options = {
  title: {
    text: "All Costs",
    align: "left",
  },

  subtitle: {
    text: "",
    align: "left",
  },

  yAxis: {
    title: {
      text: "Cost",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Number of units",
    },
    tickInterval: 1,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      type: "line",
      name: "Average Cost",
      data: [null, 40, 24, 19, 15.5, 16, 17],
    },
    {
      type: "line",
      name: "Total Cost",
      data: [30, 40, 48, 54, 62, 80, 102],
    },
    {
      type: "line",
      name: "Variable Cost",
      data: [0, 10, 18, 24, 32, 50, 72],
    },
    {
      type: "line",
      name: "Fixed Cost",
      data: [30, 30, 30, 30, 30, 30, 30],
    },
    {
      type: "line",
      name: "Marginal Cost",
      data: [null, 10, 8, 6, 8, 18, 22],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 100,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
const MarginalCosts: Highcharts.Options = {
  title: {
    text: "Marginal Cost",
    align: "left",
  },

  subtitle: {
    text: "",
    align: "left",
  },

  yAxis: {
    title: {
      text: "Cost",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Number of units",
    },
    tickInterval: 1,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },

  series: [
    {
      type: "line",
      name: "Marginal Cost",
      data: [null, 10, 8, 6, 8, 18, 22],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 100,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};
export default function Home(props: HighchartsReact.Props) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  useEffect(() => {
    setVisible(true);
  }, []);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const columns = [
    {
      key: "unit",
      label: "Units",
    },
    {
      key: "fixed",
      label: "Fixed Cost",
    },
    {
      key: "variable",
      label: "Variable Cost",
    },
    {
      key: "total",
      label: "Total Cost",
    },
    {
      key: "average",
      label: "Average Cost",
    },
    {
      key: "marginal",
      label: "Marginal Cost",
    },
  ];
  const rows = [
    {
      key: "1",
      unit: "0",
      fixed: "30",
      variable: "00",
      total: "30",
      average: "",
      marginal: "",
    },
    {
      key: "2",
      unit: "1",
      fixed: "30",
      variable: "10",
      total: "40",
      average: "40",
      marginal: "10",
    },
    {
      key: "3",
      unit: "2",
      fixed: "30",
      variable: "18",
      total: "48",
      average: "24",
      marginal: "08",
    },
    {
      key: "4",
      unit: "3",
      fixed: "30",
      variable: "24",
      total: "54",
      average: "19",
      marginal: "06",
    },
    {
      key: "5",
      unit: "4",
      fixed: "30",
      variable: "32",
      total: "62",
      average: "15.5",
      marginal: "08",
    },
    {
      key: "6",
      unit: "5",
      fixed: "30",
      variable: "50",
      total: "80",
      average: "16",
      marginal: "18",
    },
    {
      key: "7",
      unit: "6",
      fixed: "30",
      variable: "72",
      total: "102",
      average: "17",
      marginal: "22",
    },
  ];
  interface IDictionary<TValue> {
    [id: string]: TValue;
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Spacer y={3} />
        <Modal
          closeButton
          blur
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              <Text b size={18}>
                Welcome to Assignment#3
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Row justify="space-between">
              <Text size={18}>
                Name:
                <Text b size={18}>
                  Kashif
                </Text>
              </Text>
            </Row>
            <Row justify="space-between">
              <Text size={18}>
                Class:
                <Text b size={18}>
                  XI
                </Text>
              </Text>
            </Row>
            <Row justify="space-between">
              <Text size={18}>
                Roll Number:
                <Text b size={18}>
                  1
                </Text>
              </Text>
            </Row>
            <Row justify="space-between">
              <Text size={18}>
                Topic:
                <Text b size={18}>
                  law of diminishing marginal returns charting
                </Text>
              </Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Text h2>Data</Text>
        <Table
          aria-label="Example table with dynamic content"
          css={{
            width: "100%",
          }}
          selectionMode="single"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item: IDictionary<string>) => (
              <Table.Row key={item.key}>
                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <Spacer y={3} />
        <Text h2>Graphs</Text>
        <Spacer y={3} />
        <HighchartsReact
          highcharts={Highcharts}
          options={fixedCost}
          ref={chartComponentRef}
          {...props}
        />
        <Text b>
          Fixed costs are always shown as the vertical intercept of the total
          cost curve
        </Text>
        <Text size={28}>
          Fixed costs are costs that do not change when sales or production
          volumes increase or decrease. This is because they are not directly
          associated with manufacturing a product or delivering a service. As a
          result, fixed costs are considered to be indirect costs.
        </Text>
        <Spacer y={3} />
        <HighchartsReact
          highcharts={Highcharts}
          options={VariableCost}
          ref={chartComponentRef}
          {...props}
        />
        <Text b>Variable costs are always shown as the line slopes upward</Text>
        <Text size={28}>
          A variable cost is a corporate expense that changes in proportion to
          how much a company produces or sells. Variable costs increase or
          decrease depending on a company &apos;s production or sales
          volume—they rise as production increases and fall as production
          decreases.
        </Text>
        <Spacer y={3} />
        <HighchartsReact
          highcharts={Highcharts}
          options={TotalCost}
          ref={chartComponentRef}
          {...props}
        />
        <Text b>
          The total cost curve is found by adding total fixed and total variable
          costs. Its position reflects the amount of fixed costs
        </Text>
        <Text size={28}>
          The total cost is the sum of fixed costs and variable costs.
        </Text>
        {/* <Image
          alt="Vercel logo"
          src={TotalCostImage}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        /> */}
        <Spacer y={3} />
        <HighchartsReact
          highcharts={Highcharts}
          options={AverageCost}
          ref={chartComponentRef}
          {...props}
        />
        <Text b>
          A typical average cost curve has a U-shape, because fixed costs are
          all incurred before any production takes place and marginal costs are
          typically increasing, because of diminishing marginal productivity.
        </Text>
        <Text size={28}>
          Average cost refers to the per-unit cost of production, which is
          calculated by dividing the total cost of production by the total
          number of units produced. In other words, it measures the amount of
          money that the business has to spend to produce each unit of output.
        </Text>
        <Text size={25}>
          If the firm tries to raise output after that point by increasing the
          quantities of variable factors the fixed factors like machines would
          be worked beyond their capacity. This would lead to diseconomies of
          production and diminishing returns. The Average Costs will start
          rising rapidly. Hence, due to the operation of Law of Variable
          proportions the short-run as well as long-run Average Cost Curve is TJ
          shaped’.
        </Text>
        <Spacer y={3} />
        <HighchartsReact
          highcharts={Highcharts}
          options={MarginalCosts}
          ref={chartComponentRef}
          {...props}
        />
        <Text b>
          The marginal cost curve falls briefly at first, then rises.
        </Text>
        <Text size={28}>
          Marginal cost is the cost of producing one extra unit of output. It
          can be found by calculating the change in total cost when output is
          increased by one unit.
        </Text>
        <Spacer y={3} />
        <HighchartsReact
          highcharts={Highcharts}
          options={AllCosts}
          ref={chartComponentRef}
          {...props}
        />
        <Text b>The graph of all five curves</Text>
        <Text size={28}>
          There are five cost curves: fixed cost, variable cost, total cost,
          average cost and marginal cost
        </Text>
      </Container>
    </>
  );
}
