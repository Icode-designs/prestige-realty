import { supabase } from "@/api/Superbase";
import { useEffect, useState } from "react";

export function useFetchReviews() {
  const [reviewsData, setReviewsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*, users(*)")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setLoading(false);
        setReviewsData(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
        setError(error);
      }
    };

    fetchReviews();
  }, []);

  //   console.log("Reviews data fetched:", reviewsData);
  return { reviewsData, error, loading };
}
