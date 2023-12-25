import getCurrentUser from "@/src/app/actions/getCurrentUser";
import getListingById from "@/src/app/actions/getListingById";

import EmptyState from "@/src/app/components/EmptyState";

import ListingClient from "./ListingClient";
import ClientOnly from "../../ClientOnly";
import getReservations from "../../actions/getReservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
