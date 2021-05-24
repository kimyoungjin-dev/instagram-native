import { useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { Me } from "../__generated__/Me";
import { isLoggedInVar, logUserOut } from "./Apollo";
import { ME_QUERY } from "./Fragment";

export default function useMe() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery<Me>(ME_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return { data };
}
