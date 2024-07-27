// App.js
import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import PlayList from "./Playlist";
import App from "./App";

const Step1 = () => (
  <div>
    <PlayList />
  </div>
);

const Step2 = () => (
  <div>
    <App />
  </div>
);

const steps = [
  {
    title: "First",
    content: <Step1 />,
  },
  {
    title: "Last",
    content: <Step2 />,
  },
];

const Transaction = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    padding: "16px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    minHeight: "calc(100vh - 180px)", // Adjust for header and footer heights
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Steps current={current} items={items} style={{ padding: "16px" }} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        {current > 0 && <Button onClick={() => prev()}>Previous</Button>}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
};

const View = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Transaction />
    </div>
  );
};

export default View;
