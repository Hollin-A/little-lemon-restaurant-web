import { useEffect } from "react";

import { fetchAPI } from "@/api/api";

type Props = {};

const ReservationsPage = (props: Props) => {
  useEffect(() => {
    const response = fetchAPI(new Date("10-10-2025"));

    console.log(response);
  }, []);

  return <div>Reservations Page</div>;
};

export default ReservationsPage;
