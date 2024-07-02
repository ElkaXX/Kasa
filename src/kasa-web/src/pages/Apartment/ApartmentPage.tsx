import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Apartment } from "../../api/types";
import { RoutePath } from "../../routes";
import ApiClient from "../../api/client";

const ApartmentPage = () => {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      ApiClient.getApartmentAsync(id)
        .then((data) => setApartment(data))
        .catch((error) => {
          console.log(error);
          navigate(RoutePath.NOT_FOUND);
        });
    }
  }, [id, navigate]);

  if (!id) {
    return <Navigate to={RoutePath.NOT_FOUND} />;
  }

  return <div>{apartment?.title}</div>;
};

export default ApartmentPage;
