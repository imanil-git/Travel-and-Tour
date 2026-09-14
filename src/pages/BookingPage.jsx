import { BookingStepper } from "../components/booking/BookingStepper";
import { DestinationStep } from "../components/booking/DestinationStep";
import { CustomizerStep } from "../components/booking/CustomizerStep";
import { ConfirmationStep } from "../components/booking/ConfirmationStep";
import { BookingSummarySidebar } from "../components/booking/BookingSummarySidebar";
import { useBookingStore } from "../store/useBookingStore";
import { booking } from "../data/bookingData";

import { addOns } from "../data/addOns";

export default function BookingPage() {
  const step = useBookingStore((s) => s.step);

  return (
    <div className="min-h-screen py-6">
      <div className="px-4 sm:px-10 lg:px-16">
        <BookingStepper />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            {step === 1 && <DestinationStep destinations={booking} />}
            {step === 2 && <CustomizerStep addOns={addOns} />}
            {step === 3 && <ConfirmationStep />}
          </div>

          <div className="lg:col-span-4">
            <BookingSummarySidebar addOns={addOns} />
          </div>
        </div>
      </div>
    </div>
  );
}
