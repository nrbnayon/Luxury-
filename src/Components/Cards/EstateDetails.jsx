import { useLoaderData, useNavigation } from "react-router-dom";
import LoaderSpinner from "./../LoaderSpinner/LoaderSpinner";

const EstateDetails = () => {
  const villa = useLoaderData();
  const navigation = useNavigation();

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = villa || {};
  if (navigation.state === "loading" || !villa) {
    return <LoaderSpinner />;
  }
  return (
    <div>
      <p>i am details{estate_title} </p>
    </div>
  );
};

export default EstateDetails;
