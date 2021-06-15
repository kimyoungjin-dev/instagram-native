import { useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../../Apollo";
import { me } from "../../__generated__/me";
import { ME_QUERY } from "../Fragment";

export default function useUser() {
  const loggedInUser = useReactiveVar(isLoggedInVar);
  const { data } = useQuery<me>(ME_QUERY, {
    skip: !loggedInUser,
  });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  return { data };
}
