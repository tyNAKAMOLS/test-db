import BarChart from "./components/StackBarChart";
import BarChartPressing from "./components/StackBarChartPressing";
import BarChartUnloading from "./components/StackBarChartUnload";
import StackBarChartKiln from "./components/StackBarChartKiln";
import DateComponent from "./components/Date";
import GaugeComponent from "react-gauge-component";
// import TemperatureChart from "./Component/TemperatureChart";

import weighingImage from "./assets/Weighing.png";

// import mixingImage from "./assets/Mixing.png";
import pressingImage from "./assets/Pressing.png";

// import greenBrickImage from "./assets/GreenBrick.png";
import TKImage from "./assets/TK.png";

import unloadingImage from "./assets/Unloading.png";
// import kilnCarImage from "./assets/KilnCar.png";

import DashboardPage from "./pages/dashboard/dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="">
        <h1 className="text-3xl font-bold p-5">Dashboard</h1>
        {/* <ApexChart /> */}
      </header>
      {/* <div className="text-xl bg-orange-300 text-blue-600 p-4">
        Hello, Tailwind CSS!
      </div> */}
      <div
        id="box-row"
        class="grid grid-cols-2 gap-4  h-screen pr-3 pl-3 pb-3 "
      >
        <div class="bg-gray-100 rounded-md">
          <div class="bg-white rounded-md h-1/6 flex flex-col items-center justify-center text-center mb-3">
            <img src={weighingImage} alt="Weighing" className="w-12 h-12" />
            <p class="uppercase font-medium">Weighing</p>
          </div>
          <div class="bg-white h-5/6 text-center rounded-md">
            <div class="pt-3  ">
              <BarChart />
            </div>
            <div>
              <DateComponent />

              <div class="bg-slate-500 rounded-md mt-3 mr-3 ml-3  grid grid-cols-1 ">
                <div class="bg-white pb-3 pt-2 font-medium">Weighing</div>
              </div>

              <div class="bg-slate-200 rounded-md  mr-3 ml-3 grid grid-cols-2 gap-1 ">
                <div class="bg-white pb-2">
                  <p class="font-medium">BP1</p>
                  <p class="text-4xl font-bold">76.5</p>
                  <p class="font-medium">Ton</p>
                </div>
                <div class="bg-white border-l-2">
                  <p class="font-medium">BP2</p>
                  <p class="text-4xl font-bold">45.0</p>
                  <p class="font-medium">Ton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 rounded-md">
          <div class="bg-white rounded-md h-1/6 flex flex-col items-center justify-center text-center mb-3">
            <img src={pressingImage} alt="pressing" className="w-12 h-12" />
            <p class="uppercase font-medium">pressing</p>
          </div>
          <div class="bg-white  h-5/6 text-center rounded-md">
            <div class="pt-3  ">
              <BarChartPressing />
            </div>
            <div>
              <DateComponent />
              {/* <div class="h-3/5 flex items-center justify-center">
                <GaugeComponent
                  value={75}
                  type="radial"
                  arc={{
                    colorArray: ["#EA4228", "#F8E71C", "#5BE12C"], // แดง -> เหลือง -> เขียว
                    subArcs: [
                      { limit: 33 }, // 33% แรกเป็นสีแดง
                      { limit: 66 }, // 33% ถัดไปเป็นสีเหลือง
                      {}, // ส่วนที่เหลือเป็นสีเขียว
                    ],
                    padding: 0.02,
                    width: 0.3,
                  }}
                  pointer={{
                    elastic: true,
                    animationDelay: 0,
                    color: "#000000", // สีของ pointer เป็นสีดำ
                  }}
                  labels={{
                    valueLabel: {
                      color: "#000000", // สีของค่าที่แสดงเป็นสีดำ
                      fontSize: "24px", // สามารถกำหนดขนาดของตัวอักษรได้เช่นกัน
                      fontWeight: "bold", // หรือกำหนดให้ตัวอักษรหนาขึ้น
                    },
                  }}
                />
              </div> */}

              <div class="bg-slate-500 rounded-md mt-3 mr-3 ml-3  grid grid-cols-1 ">
                <div class="bg-white pb-3 pt-2 font-medium">Weighing</div>
              </div>
              <div class="bg-slate-200 rounded-md  mr-3 ml-3 grid grid-cols-2 gap-1 ">
                <div class="bg-white pb-2">
                  <p class="font-medium">BP1</p>
                  <p class="text-4xl font-bold">76.5</p>
                  <p class="font-medium">Ton</p>
                </div>
                <div class="bg-white border-l-2">
                  <p class="font-medium">BP2</p>
                  <p class="text-4xl font-bold">45.0</p>
                  <p class="font-medium">Ton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 rounded-md">
          <div class="bg-white rounded-md h-1/6 flex flex-col items-center justify-center text-center mb-3">
            <img src={TKImage} alt="TK" className="w-18 h-14" />
            <p class="uppercase font-medium">kiln</p>
          </div>
          <div class="bg-white  h-5/6 text-center rounded-md">
            <div class="pt-3  ">
              <StackBarChartKiln />
            </div>
            <div>
              <DateComponent />
              <div class="bg-slate-500 rounded-md mt-3 mr-3 ml-3  grid grid-cols-1 ">
                <div class="bg-white pb-3 pt-2 font-medium">Weighing</div>
              </div>

              <div class="bg-slate-200 rounded-md  mr-3 ml-3 grid grid-cols-2 gap-1 ">
                <div class="bg-white pb-2">
                  <p class="font-medium">BP1</p>
                  <p class="text-4xl font-bold">76.5</p>
                  <p class="font-medium">Ton</p>
                </div>
                <div class="bg-white border-l-2">
                  <p class="font-medium">BP2</p>
                  <p class="text-4xl font-bold">45.0</p>
                  <p class="font-medium">Ton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 rounded-md">
          <div class="bg-white rounded-md h-1/6 flex flex-col items-center justify-center text-center mb-3">
            <img src={unloadingImage} alt="unloading" className="w-16 h-12" />
            <p class="uppercase font-medium">unloading</p>
          </div>
          <div class="bg-white h-5/6 text-center rounded-md">
            <div class="pt-3">
              <BarChartUnloading />
            </div>
            <div>
              <DateComponent />
              <div class="bg-slate-500 rounded-md mt-3 mr-3 ml-3  grid grid-cols-1 ">
                <div class="bg-white pb-3 pt-2 font-medium">Weighing</div>
              </div>

              <div class="bg-slate-200 rounded-md  mr-3 ml-3 grid grid-cols-2 gap-1 ">
                <div class="bg-white pb-2">
                  <p class="font-medium">BP1</p>
                  <p class="text-4xl font-bold">76.5</p>
                  <p class="font-medium">Ton</p>
                </div>
                <div class="bg-white border-l-2">
                  <p class="font-medium">BP2</p>
                  <p class="text-4xl font-bold">45.0</p>
                  <p class="font-medium">Ton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
