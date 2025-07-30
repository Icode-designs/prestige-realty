import { useFetchReviews } from "@/hooks/useReview";
import { ReviewCard } from "@/styles/Reviews.styles";
import {
  FlexBox,
  GridBox,
  Heading2,
  Heading3,
  SectionWrapper,
} from "@/styles/Ui.styles";
import React from "react";
import StarRating from "./ui/StarRating";
import { useAuthUser } from "@/hooks/useAuthUser";

const Reviews = () => {
  const { reviewsData, loading, error } = useFetchReviews();
  const { user } = useAuthUser();
  // console.log("Reviews data:", reviewsData);

  return (
    <SectionWrapper>
      <FlexBox $variant={user ? "spaced" : "centered"}>
        <Heading2>
          Customer <span>Reviews</span>
        </Heading2>
        {user && <span>Add review</span>}
      </FlexBox>
      {loading && <p>Loading reviews...</p>}
      {error && <p>Error loading reviews: {error.message}</p>}
      {reviewsData && reviewsData.length > 0 ? (
        <GridBox>
          {reviewsData.map((review) => (
            <ReviewCard key={review.id}>
              <p>{review.reviewText}</p>
              <StarRating rating={review.stars} />
              <Heading3>
                {review.users.firstName + " " + review.users.lastName}
              </Heading3>
            </ReviewCard>
          ))}
        </GridBox>
      ) : (
        <p>No reviews available.</p>
      )}
    </SectionWrapper>
  );
};

export default Reviews;
