import React from "react";
import { Affix } from "./Affix";
import { api } from "./api.js";
import { Layout } from "../Layout/Layout";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export default {
  title: "Atoms/Affix",
  component: Affix,
  tags: ["autodocs"],
  argTypes: api,
};
export const Example = {
  render: (args) => (
    <Layout style={{ padding: 20 }}>
      <Affix {...args}>
        <Button>Button</Button>
      </Affix>
      <Card>
        {[...Array(20)].map((item, index) => (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            enim consectetur obcaecati nihil nobis, molestias reiciendis maiores
            omnis eveniet, a itaque libero delectus eum. Commodi eligendi autem
            dolore alias harum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nesciunt enim consectetur obcaecati nihil nobis,
            molestias reiciendis maiores omnis eveniet, a itaque libero delectus
            eum. Commodi eligendi autem dolore alias harum!
          </p>
        ))}
      </Card>
    </Layout>
  ),
};
