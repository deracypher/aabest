import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export function ScrollAnimationWrapper({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const animations = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "-translate-x-8 opacity-0",
    "slide-right": "translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
  };

  const visibleState = "translate-y-0 translate-x-0 scale-100 opacity-100";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleState : animations[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
