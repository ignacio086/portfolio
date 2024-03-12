"use client";
import { motion } from "framer-motion";
import { Button, Timeline } from "keep-react";
import Link from "next/link";
import { ArrowRight, CalendarBlank } from "phosphor-react";

export const TimelineComponent = ({lang}) => {
  return (
    <Timeline timelineBarType="dashed">
      <motion.div
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Time>{lang.firstfecha}</Timeline.Time>
            <Timeline.Title>{lang.firsttitle}</Timeline.Title>
            <Timeline.Body>Tech: Arduino-Wordpress-Javascript</Timeline.Body>
            <Timeline.Body>
            {lang.firstcontent}
            </Timeline.Body>
            <Button type="primary" size="sm">
              <Link href="https://www.mendoza.edu.ar/mendoza-futura/">
                {lang.boton}
              </Link>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
      <motion.div
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Time>{lang.secondfecha}</Timeline.Time>
            <Timeline.Title>{lang.secondtitle}</Timeline.Title>
            <Timeline.Body>Tech: Wordpress</Timeline.Body>
            <Timeline.Body>
              {lang.secondcontent}
            </Timeline.Body>
            <Button type="primary" size="sm">
              <Link href="https://tribusustentable.com/">{lang.boton}</Link>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
      <motion.div
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Time>{lang.thirdfecha}</Timeline.Time>
            <Timeline.Title>{lang.thirdtitle}</Timeline.Title>
            <Timeline.Body>Tech: Next.js-React-BDD-Nestjs</Timeline.Body>
            <Timeline.Body>
            {lang.thirdcontent}
            </Timeline.Body>
            <Button type="primary" size="sm">
              <Link href="https://github.com/ignacio086">{lang.boton}</Link>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
    </Timeline>
  );
};
