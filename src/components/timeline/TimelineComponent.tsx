"use client";

import { ITimeline } from "@/interface/ITimeline";
import { listTimeline } from "@/utils/ListTimeline";
import { Button, Timeline } from "flowbite-react";
import Image from "next/image";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const TimelineItem = ({ time, title, body, link, imgSrc }: ITimeline) => {
  return (
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>{time}</Timeline.Time>
        <Timeline.Title>{title}</Timeline.Title>
        <Timeline.Body>
          {imgSrc && (
            <Image
              className="object-contain h-96 w-full"
              alt="Ilustrate"
              src={imgSrc}
              height={1920}
              width={1080}
            />
          )}
          <p className="clear-left text-justify text-pretty whitespace-pre-line">
            {body}
          </p>
        </Timeline.Body>

        {link && (
          <Button color="gray" href={link} target="_blank">
            See more
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        )}
      </Timeline.Content>
    </Timeline.Item>
  );
};

export const TimelineComponent = () => {
  return (
    <Timeline>
      {listTimeline.map((time, idx) => (
        <TimelineItem
          key={idx}
          time={time.time}
          title={time.title}
          body={time.body}
          link={time.link}
          imgSrc={time.imgSrc}
        />
      ))}
    </Timeline>
  );
};
