"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface Slide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image: string;
  ctaKey?: string;
  ctaHref?: string;
  ctaSecondaryKey?: string;
  ctaSecondaryHref?: string;
}

export function HeroSlider() {
  const { t } = useLanguage();
  
  const slides: Slide[] = [
    {
      id: 1,
      titleKey: "hero.slide1.title",
      subtitleKey: "hero.slide1.subtitle",
      descriptionKey: "hero.slide1.description",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
      ctaKey: "hero.slide1.cta",
      ctaHref: "/services",
      ctaSecondaryKey: "hero.slide1.ctaSecondary",
      ctaSecondaryHref: "/about",
    },
    {
      id: 2,
      titleKey: "hero.slide2.title",
      subtitleKey: "hero.slide2.subtitle",
      descriptionKey: "hero.slide2.description",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      ctaKey: "hero.slide2.cta",
      ctaHref: "/projects",
      ctaSecondaryKey: "hero.slide2.ctaSecondary",
      ctaSecondaryHref: "/contact",
    },
    {
      id: 3,
      titleKey: "hero.slide3.title",
      subtitleKey: "hero.slide3.subtitle",
      descriptionKey: "hero.slide3.description",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      ctaKey: "hero.slide3.cta",
      ctaHref: "/news",
      ctaSecondaryKey: "hero.slide3.ctaSecondary",
      ctaSecondaryHref: "/contact",
    },
    {
      id: 4,
      titleKey: "hero.slide4.title",
      subtitleKey: "hero.slide4.subtitle",
      descriptionKey: "hero.slide4.description",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070",
      ctaKey: "hero.slide4.cta",
      ctaHref: "/programs",
      ctaSecondaryKey: "hero.slide4.ctaSecondary",
      ctaSecondaryHref: "/register",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  React.useEffect(() => {
    // Set background images using data attributes
    const bgElements = document.querySelectorAll(".hero-slide-bg");
    bgElements.forEach((el) => {
      const bgImage = el.getAttribute("data-bg-image");
      if (bgImage) {
        (el as HTMLElement).style.backgroundImage = `url('${bgImage}')`;
      }
    });
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className="relative h-[250px] md:h-[300px] lg:h-[350px] w-full">
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center hero-slide-bg"
                  data-bg-image={slide.image}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative container max-w-7xl mx-auto px-4 h-full flex items-center">
                  <div className="max-w-3xl text-white">
                    <div className="mb-4 inline-block">
                      <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        {t(slide.subtitleKey)}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {t(slide.titleKey)}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                      {t(slide.descriptionKey)}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {slide.ctaKey && slide.ctaHref && (
                        <Button
                          size="lg"
                          className="text-base"
                          asChild
                        >
                          <a href={slide.ctaHref}>{t(slide.ctaKey)}</a>
                        </Button>
                      )}
                      {slide.ctaSecondaryKey && slide.ctaSecondaryHref && (
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-base bg-white/10 hover:bg-white/20 text-white border-white/30"
                          asChild
                        >
                          <a href={slide.ctaSecondaryHref}>
                            {t(slide.ctaSecondaryKey)}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm h-12 w-12"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm h-12 w-12"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
