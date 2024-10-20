"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import "./Styles.css";
const SearchCode = dynamic(() => import("@/components/certificate/SearchCode"));
const SearchDNI = dynamic(() => import("@/components/certificate/SearchDNI"));
const SearchName = dynamic(() => import("@/components/certificate/SearchName"));

interface Props {
  // Define any props if needed
}

const TestingPage: React.FC<Props> = () => {
  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <section className=" bg-fixed  " style={{}}>
      <div
        className=""
        style={{
          
          backgroundAttachment: "fixed",
          backgroundImage: "url(/bg_cert3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" py-8  mx-auto max-w-screen-xl lg:py-10">
          <div className="" style={{ position: "relative", width: "100%" }}>
            <div
              className="bg-gradient-to-t from-[#B401CF]/75 to-[#5800B7]/75 border border-white/55  rounded-lg p-8 md:p-12 mb-50 mt-28 mx-2"
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl  md:mr-0 md:p-4  ">
                <div className="md:mr-12">
                  <div className="flex flex-col">
                    <h2 className=" mb-4 text-2xl font-extrabold text-center text-white md:mb-6 lg:text-4xl">
                      VERIFICA TU CERTIFICADO
                    </h2>
                    <p className="text-white  font-light text-center md:text-xl mb-8  ">
                      Verifica la autenticidad de tu certificado ingresando tu
                      DNI, nombres o código de certificación proporcionado al
                      obtenerlo. Nos aseguramos de proteger tu privacidad y la
                      confidencialidad de tus datos.
                    </p>

                    <Tabs
                      aria-label="Options"
                      color="primary"
                      classNames={{
                        tabList:
                          "w-full flex flex-col md:flex-row bg-transparent rounded-md border border-gray-300/40",
                        cursor: "bg-transparent rounded-md border border-gray-50/50 text-gray-100",
                        tab: "py-2 px-4 rounded-t-lg text-gray-100",
                        tabContent:
                          "group-data-[selected=true]:text-gray-100 text-g-100 ",
                      }}
                    >
                      <Tab key="dni" title="Buscar por DNI" className="">
                        <Card>
                          <CardBody className="bg-transparent roun">
                            <div className="">
                              <SearchDNI onSearchDNI={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="name" title="Buscar por Código">
                        <Card>
                          <CardBody className="bg-transparent dark:bg-blackblue2">
                            <div>
                              <SearchCode onSearchCode={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="code" title="Buscar por nombres">
                        <Card>
                          <CardBody className="bg-transparent dark:bg-blackblue2">
                            <div>
                              <SearchName onSearchName={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
                </div>

                <div className=" grid grid-cols-2 gap-2 mt-4 md:mt-0 md:w-full md:grid-rows-2 md:gap-y-8 justify-items-center md:items-center">
                  <div className="row-span-2">
                    <Image
                      src="/certs/logo_promas_3.png"
                      alt="promas"
                      width={130}
                      height={130}
                      className=""
                    />
                  </div>

                  <div className="self-center">
                    <Image
                      src="/certs/unp.png"
                      alt="promas"
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className="row-span-2">
                    <Image
                      src="/certs/funde.png"
                      alt="promas"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingPage;
