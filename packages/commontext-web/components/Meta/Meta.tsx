import * as React from "react";

import styles from "./Meta.module.scss";

import { MetaProps } from "./Meta.d";

const Meta: React.FC<MetaProps> = () => {
  return (
    <>
      <title>Create Next App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <script src="https://unpkg.com/phosphor-icons" async></script>
    </>
  );
};

export default Meta;