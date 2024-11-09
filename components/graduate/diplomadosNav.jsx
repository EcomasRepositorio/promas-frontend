"use client"; // This ensures the component is treated as a client component

import React, { useState, useEffect, useRef } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import DiploCivil from "./diplomadosCivil";
import DiploAmbiental from "./diplomadosAmbient";
import DiploAlimentarias from "./diplomadosAlimentarias";
import DiploAgronoma from "./diplomadosAgronoma";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  const ambientalRef = useRef(null);
  const agronomaRef = useRef(null);
  const civilRef = useRef(null);
  const alimentariasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAccordionClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex w-full flex-col rounded-3xl">
      {isMobile ? (
        <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton ref={ambientalRef} onClick={() => handleAccordionClick(ambientalRef)}>
                INGENIERÍA AMBIENTAL
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Card className="border-none shadow-none ">
                <CardBody className="bg-violet-50 border-none rounded-3xl">
                  <DiploAmbiental />
                </CardBody>
              </Card>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton ref={agronomaRef} onClick={() => handleAccordionClick(agronomaRef)}>
                INGENIERÍA AGRÓNOMA
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Card className="border-none shadow-none">
                <CardBody className="dark:bg-blackblue2 bg-violet-50 border-none rounded-3xl">
                  <DiploAgronoma />
                </CardBody>
              </Card>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton ref={civilRef} onClick={() => handleAccordionClick(civilRef)}>
                INGENIERÍA CIVIL
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Card className="border-none shadow-none">
                <CardBody className="dark:bg-blackblue2 bg-violet-50 border-none rounded-3xl">
                  <DiploCivil />
                </CardBody>
              </Card>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton ref={alimentariasRef} onClick={() => handleAccordionClick(alimentariasRef)}>
                INGENIERÍA ALIMENTARIA
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Card className="border-none shadow-none">
                <CardBody className="dark:bg-blackblue2 bg-violet-50 border-none rounded-3xl">
                  <DiploAlimentarias />
                </CardBody>
              </Card>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Tabs
          disabledKeys={["anothers"]}
          color="primary"
          aria-label="Options"
          className="w-full md:max-w-max "
          placement={isMobile ? "top" : "start"}
          classNames={{
            tabList: " w-full dark:bg-blackblue2 bg-blue-white",
            cursor: "bg-purple-500 rounded-3xl",
            tab: "",
            tabContent:
              "group-data-[selected=true]:text-white dark:text-black ",
          }}
        >
          <Tab key="ambient" title="INGENIERÍA AMBIENTAL" className="text-black">
            <Card className="border-none shadow-none">
              <CardBody className="bg-violet-50 border-none rounded-3xl">
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="agrono" title="INGENIERÍA AGRÓNOMA">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-violet-50 border-none rounded-3xl">
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="civil" title="INGENIERÍA CIVIL">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-violet-50 border-none rounded-3xl">
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="alimentaria" title="INGENIERÍA ALIMENTARIA">
            <Card className="border-none shadow-none">
              <CardBody className="dark:bg-blackblue2 bg-violet-50 border-none rounded-3xl">
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      )}
    </div>
  );
}
