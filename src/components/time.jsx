"use client";
import { motion } from "framer-motion";
import { Button, Timeline } from "keep-react";
import Link from "next/link";
import { ArrowRight, CalendarBlank } from "phosphor-react";

export const TimelineComponent = () => {
  return (
    <Timeline timelineBarType="dashed">
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Time>Abril 2022 - Agosto 2023</Timeline.Time>
            <Timeline.Title>Profesor Mendoza Futura</Timeline.Title>
            <Timeline.Body>Tech: Arduino-Wordpress-Javascript</Timeline.Body>
            <Timeline.Body>
              Dicté clases de programación web en la localidad de
              Lavalle,Mendoza, siendo parte del programa Mendoza Futura.
            </Timeline.Body>
            <Button type="primary" size="sm">
              <Link href="https://www.mendoza.edu.ar/mendoza-futura/">
                Conocer más
              </Link>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Time>Abril 2021 - Abril 2023</Timeline.Time>
            <Timeline.Title>CTO TribÜ Sustentable</Timeline.Title>
            <Timeline.Body>Tech: Wordpress</Timeline.Body>
            <Timeline.Body>
              Realicé la creación, optimización y organización del e-commerce de
              Tribü, el cual ofrecía productos sustentables de emprendimientos
              autóctonos de mi provincia.
            </Timeline.Body>
            <Button type="primary" size="sm">
              <Link href="https://tribusustentable.com/">Conocer más</Link>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Timeline.Item>
          <Timeline.Point icon={<CalendarBlank size={16} />} />
          <Timeline.Content>
            <Timeline.Time>Febrero 2021 - Presente</Timeline.Time>
            <Timeline.Title>Freelancer</Timeline.Title>
            <Timeline.Body>Tech: Next.js-React-BDD-Nestjs</Timeline.Body>
            <Timeline.Body>
              He realizado páginas web para diversos clientes, aumentando así su
              visibilidad en internet. Ádemas he creado aplicaciones de stock y
              gestores de negocio para aumentar su rendimiento.
            </Timeline.Body>
            <Button type="primary" size="sm">
              <Link href="https://github.com/ignacio086">Conocer más</Link>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
    </Timeline>
  );
};
