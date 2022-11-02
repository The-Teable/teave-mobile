import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { clickProductApi } from "../api/teaApi";

const useTeaActionQuery = () => {
  const queryClickProduct = useMutation(clickProductApi).mutate;

  return { queryClickProduct };
};

export default useTeaActionQuery;
