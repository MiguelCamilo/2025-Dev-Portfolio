"use client";

import React, { useState, MouseEvent } from "react";

import { useConfirmModal } from "@/hooks/useConfirmModal";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

interface ResumeCardProps {
  id: number;
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  hasLinks?: boolean;
  hasBadges?: boolean;
  displayChevron?: boolean;
  links?: readonly { label: string; href: string }[];
  badges?: readonly string[];
  period: string;
  description?: readonly string[];
}
export const ResumeCard = ({
  id,
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  hasLinks,
  hasBadges,
  displayChevron,
  badges,
  links,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(id === 0 ? true : false);
  const [ConfirmModal, confirm] = useConfirmModal(
    "Visit Website",
    `You're about to visit ${title}'s website. Continue?`,
    "Continue",
    "default"
  );

  const handleConfirm = async () => {
    const ok = await confirm();

    if (ok) {
      window.open(href);
    }
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <>
      <Card className="flex">
        <div className="flex-none">
          <Avatar onClick={handleConfirm} className="cursor-pointer border size-12 m-auto bg-muted-background dark:bg-foreground hover:border-1 hover:border-muted-foreground/30 hover:shadow-md transition-all duration-300 ease-out">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <button
              className="block cursor-pointer"
              onClick={handleClick}
            >
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {displayChevron && (
                    <ChevronRightIcon
                      className={cn(
                        "size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1",
                        isExpanded ? "rotate-90" : "rotate-0"
                      )}
                    />
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
            </button>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            {badges && hasBadges && (
              <div className="flex flex-wrap gap-x-1 gap-y-1 my-2">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
            {links && hasLinks && (
              <div className="flex flex-wrap gap-x-1 gap-y-1">
                {links.map((link, index) => (
                  <Link key={index} href={link.href} target="_blank">
                    <Badge variant="outline" className="flex gap-2 text-[10px] hover:shadow-sm transition-all duration-300 ease-out text-blue-500">
                      <LinkIcon className="size-3" />
                      {link.label}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              <ul className="list-disc list-inside space-y-1">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </Card>
      <ConfirmModal />
    </>
  );
};
