import React, { useState } from "react";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import CardJobs from "./CardJobs";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "All Jobs",
    children: (
      <div className="flex flex-col gap-3">
        <CardJobs
          jobTitle="Sales Consultant"
          location="San Francisco, CA"
          imageUrl="https://framerusercontent.com/images/BxoMNq5iSIdYCfbg2xMtqqn4wk.jpg?scale-down-to=512"
          employmentType="Full-time"
          avgSalary="187,300"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Private Jet Sales Consultant"
          location="SGreenwich, NY"
          imageUrl="https://framerusercontent.com/images/4OOS8gnrx73SvkFOXJKIVQhKwk0.jpg?scale-down-to=512"
          employmentType="Hybrid"
          avgSalary="150,000"
          categories={["Sales", "Consultant", "Jet"]}
          date="Sep 31, 2024"
        />
        <CardJobs
          jobTitle="Rate Sales Analyst"
          location="Austin, TX"
          imageUrl="https://framerusercontent.com/images/y8QwIHRPBB5yQ9yPfaarfC2MDc.jpg?scale-down-to=4096"
          employmentType="Remote"
          avgSalary="118,000"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Sales Consultant"
          location="San Francisco, CA"
          imageUrl="https://framerusercontent.com/images/BxoMNq5iSIdYCfbg2xMtqqn4wk.jpg?scale-down-to=512"
          employmentType="Full-time"
          avgSalary="187,300"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Private Jet Sales Consultant"
          location="SGreenwich, NY"
          imageUrl="https://framerusercontent.com/images/4OOS8gnrx73SvkFOXJKIVQhKwk0.jpg?scale-down-to=512"
          employmentType="Hybrid"
          avgSalary="150,000"
          categories={["Sales", "Consultant", "Jet"]}
          date="Sep 31, 2024"
        />
        <CardJobs
          jobTitle="Rate Sales Analyst"
          location="Austin, TX"
          imageUrl="https://framerusercontent.com/images/y8QwIHRPBB5yQ9yPfaarfC2MDc.jpg?scale-down-to=4096"
          employmentType="Remote"
          avgSalary="118,000"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
      </div>
    ),
  },
  {
    key: "2",
    label: "Trending Jobs",

    children: (
      <div className="flex flex-col gap-3">
        <CardJobs
          jobTitle="Junior Web Developer"
          location="Greenwich, NY"
          imageUrl="https://framerusercontent.com/images/9Mz86W7T2RTdrq74QAiIQUQD6cU.jpg?scale-down-to=4096"
          employmentType="Hybrid"
          avgSalary="128,600"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Entry Level Java Developer"
          location="New York, NY"
          imageUrl="https://framerusercontent.com/images/LG5tjrGIzHBYFxwuMKMjag4v8.jpg?scale-down-to=4096"
          employmentType="Hybrid"
          avgSalary="150,000"
          categories={["Sales", "Consultant", "Jet"]}
          date="Sep 31, 2024"
        />
        <CardJobs
          jobTitle="Distribution Center Software Engineer"
          location="Washington, NY"
          imageUrl="https://framerusercontent.com/images/LfcR9yeg7quuW1zBU5D6zhJmPc.jpg?scale-down-to=4096"
          employmentType="Remote"
          avgSalary="118,000"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Junior Web Developer"
          location="San Francisco"
          imageUrl="https://framerusercontent.com/images/9Mz86W7T2RTdrq74QAiIQUQD6cU.jpg?scale-down-to=4096"
          employmentType="Full-time"
          avgSalary="187,300"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Private Jet Sales Consultant"
          location="SGreenwich, NY"
          imageUrl="https://framerusercontent.com/images/LG5tjrGIzHBYFxwuMKMjag4v8.jpg?scale-down-to=4096"
          employmentType="Hybrid Remote"
          avgSalary="150,000"
          categories={["Sales", "Consultant", "Jet"]}
          date="Sep 31, 2024"
        />
        <CardJobs
          jobTitle="Rate Sales Analyst"
          location="Austin, TX"
          imageUrl="https://framerusercontent.com/images/LfcR9yeg7quuW1zBU5D6zhJmPc.jpg?scale-down-to=4096"
          employmentType="Remote"
          avgSalary="118,000"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
      </div>
    ),
  },
  {
    key: "3",
    label: "Most Recent Jobs",

    children: (
      <div className="flex flex-col gap-3">
        <CardJobs
          jobTitle="Flagship Sales Specialist"
          location="Stamford, CT"
          imageUrl="https://framerusercontent.com/images/BWgX38gx7D8czlrt8D7fwM11l8.jpg?scale-down-to=4096"
          employmentType="Full-time"
          avgSalary="187,300"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Digital Sales Representative"
          location="SGreenwich, NY"
          imageUrl="https://framerusercontent.com/images/LdHXWqSDotmm00l2KusB13zXLM.jpg?scale-down-to=4096"
          employmentType="Hybrid"
          avgSalary="150,000"
          categories={["Sales", "Consultant", "Jet"]}
          date="Sep 31, 2024"
        />
        <CardJobs
          jobTitle="Rate Sales Analyst"
          location="Austin, TX"
          imageUrl="https://framerusercontent.com/images/y8QwIHRPBB5yQ9yPfaarfC2MDc.jpg?scale-down-to=4096"
          employmentType="Remote"
          avgSalary="118,000"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Sales Consultant"
          location="San Francisco, CA"
          imageUrl="https://framerusercontent.com/images/BWgX38gx7D8czlrt8D7fwM11l8.jpg?scale-down-to=4096"
          employmentType="Full-time"
          avgSalary="187,300"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
        <CardJobs
          jobTitle="Private Jet Sales Consultant"
          location="SGreenwich, NY"
          imageUrl="https://framerusercontent.com/images/4OOS8gnrx73SvkFOXJKIVQhKwk0.jpg?scale-down-to=512"
          employmentType="Hybrid"
          avgSalary="150,000"
          categories={["Sales", "Consultant", "Jet"]}
          date="Sep 31, 2024"
        />
        <CardJobs
          jobTitle="Rate Sales Analyst"
          location="Austin, TX"
          imageUrl="https://framerusercontent.com/images/y8QwIHRPBB5yQ9yPfaarfC2MDc.jpg?scale-down-to=4096"
          employmentType="Remote"
          avgSalary="118,000"
          categories={["Sales", "Marketing", "Retail"]}
          date="Sep 2, 2024"
        />
      </div>
    ),
  },
];
const Content = () => {
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (key) => {
    setActiveKey(key);
    console.log(key);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center my-[50px]">
      <div className="lg:w-[940px] w-[350px] flex justify-center items-center">
        <Tabs
          className="lg:w-[940px] w-[350px]"
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={handleTabChange}
        >
          {items.map((item) => (
            <TabPane
              tab={
                <div
                  className={`lg:px-4 lg:py-2 p-1 rounded-full  ${
                    activeKey === item.key ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {item.label}
                </div>
              }
              key={item.key}
            >
              {item.children}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Content;
