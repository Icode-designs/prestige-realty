import { useFetchReviews } from "@/hooks/useReview";
import { ReviewCard } from "@/styles/Reviews.styles";
import {
  FlexBox,
  GridBox,
  Heading2,
  Heading3,
  LoaderBox,
  SectionWrapper,
} from "@/styles/Ui.styles";
import React from "react";
import StarRating from "./ui/StarRating";
import { useAuthUser } from "@/hooks/useAuthUser";
import Button from "./ui/Button";

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
        {user && <Button>Add review</Button>}
      </FlexBox>
      {loading && (
        <FlexBox $variant="centered">
          <LoaderBox />
        </FlexBox>
      )}
      {error && <p>Error loading reviews: {error.message}</p>}
      {reviewsData && reviewsData.length > 0 ? (
        <GridBox $variant="horizontal">
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
