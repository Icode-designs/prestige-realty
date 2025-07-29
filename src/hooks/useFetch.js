import { useEffect, useState } from "react";
import { supabase } from "../api/Superbase";

export function useFetchListings() {
  const [listingsData, setListingsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchListings = async () => {
      try {
        const { data, error } = await supabase
          .from("listings")
          .select("*,  listingsImages(*)")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setLoading(false);
        setListingsData(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setLoading(false);
        setError(error);
      }
    };

    fetchListings();
  }, []);

  return { listingsData, error, loading };
}

export function useFetchNeighborhoods() {
  const [neighborhoodsData, setNeighborhoodData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchNeighborhoods = async () => {
      try {
        const { data, error } = await supabase
          .from("neighborhoods")
          .select("*, neighborhoodImagesTable(*)")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setLoading(false);
        setNeighborhoodData(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setLoading(false);
        setError(error);
      }
    };

    fetchNeighborhoods();
  }, []);

  return { neighborhoodsData, error, loading };
}
