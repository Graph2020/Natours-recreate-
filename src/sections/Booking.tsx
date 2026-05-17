import type { JSX } from "react";
import MainButton from "../components/MainButton";
import Input from "../components/Input";
import RadioInput from "../components/RadioInput";

const Booking = (): JSX.Element => {
  return (
    <section className="page-container center-elements main-gradient h-screen">
      <div className="relative h-3/4 w-96 flex-col bg-[url('/img/nat-10.jpg')] bg-cover bg-center p-5 md:w-3/4">
        <div className="center-elements absolute inset-0 h-full w-full flex-col gap-7 bg-white/80 p-5 shadow-xl md:gap-10 lg:hidden">
          <Elements idPrefix="mobile" />
        </div>

        <div className="absolute top-0 -left-px hidden h-full w-2/3 flex-col items-start justify-center gap-7 bg-white/80 pl-10 shadow-xl [clip-path:polygon(0_0,100%_0,81%_100%,0%_100%)] md:gap-10 lg:flex">
          <Elements idPrefix="desktop" />
        </div>
      </div>
    </section>
  );
};

function Elements({ idPrefix }: { idPrefix: string }) {
  const groupName = `${idPrefix}-tour-group`;

  return (
    <>
      <h1 className="main-title mb-0 whitespace-nowrap sm:whitespace-normal md:whitespace-nowrap">
        Start booking now
      </h1>

      <Input id="fullName" inputType="text" text="Full name" />

      <Input id="email" inputType="email" text="Email" />

      <div className="flex w-full flex-col items-start gap-4 md:flex-row md:gap-10">
        <RadioInput
          id={`${idPrefix}-large`}
          name={groupName}
          text="Large tour group"
        />
        <RadioInput
          id={`${idPrefix}-small`}
          name={groupName}
          text="Small tour group"
        />
      </div>

      <MainButton
        text="next step"
        textColor="text-white"
        bgColor="bg-medium-green"
        afterBgColor="after:bg-medium-green"
        padding="px-4 py-2"
      />
    </>
  );
}

export default Booking;
