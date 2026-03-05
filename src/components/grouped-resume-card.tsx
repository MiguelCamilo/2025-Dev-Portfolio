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

interface WorkRole {
  id: number;
  title: string;
  period: string;
  hasBadges?: boolean;
  badges?: readonly string[];
  hasLinks?: boolean;
  links?: readonly { label: string; href: string }[];
  displayChevron?: boolean;
  description?: readonly string[];
}

interface WorkGroup {
  company: string;
  href?: string;
  logoUrl: string;
  location: string;
  roles: WorkRole[];
}

interface RoleItemProps {
  role: WorkRole;
  isLast: boolean;
}

const RoleItem = ({ role, isLast }: RoleItemProps) => {
  const hasDescription =
    role.description !== undefined && role.description.length > 0;
  const [isExpanded, setIsExpanded] = useState(role.id === 0 && hasDescription);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (hasDescription) {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="flex gap-x-3">
      <div className="flex flex-col items-center flex-none w-4">
        <div className="mt-[6px] size-2 rounded-full bg-muted-foreground/50 flex-none ring-2 ring-background" />
        {!isLast && (
          <div className="flex-1 w-px bg-muted-foreground/20 mt-1" />
        )}
      </div>

      <div
        className={cn(
          "flex-grow min-w-0 group",
          !isLast && "pb-4"
        )}
      >
        <button
          className={cn(
            "block w-full text-left",
            hasDescription ? "cursor-pointer" : "cursor-default"
          )}
          onClick={handleClick}
          disabled={!hasDescription}
        >
          <div className="flex items-center justify-between gap-x-2">
            <h4 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
              {role.title}
              {role.displayChevron && hasDescription && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </h4>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
              {role.period}
            </div>
          </div>
        </button>

        {role.badges && role.hasBadges && role.badges.length > 0 && (
          <div className="flex flex-wrap gap-x-1 gap-y-1 mt-2">
            {role.badges.map((badge, index) => (
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

        {role.links && role.hasLinks && role.links.length > 0 && (
          <div className="flex flex-wrap gap-x-1 gap-y-1 mt-2">
            {role.links.map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                <Badge
                  variant="outline"
                  className="flex gap-2 text-[10px] hover:shadow-sm transition-all duration-300 ease-out text-blue-500"
                >
                  <LinkIcon className="size-3" />
                  {link.label}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {hasDescription && (
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
            className="mt-2 text-xs sm:text-sm overflow-hidden"
          >
            <ul className="list-disc list-inside space-y-1">
              {role.description!.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const GroupedResumeCard = ({
  company,
  href,
  logoUrl,
  location,
  roles,
}: WorkGroup) => {
  const [ConfirmModal, confirm] = useConfirmModal(
    "Visit Website",
    `You're about to visit ${company}'s website. Continue?`,
    "Continue",
    "default"
  );

  const handleConfirm = async () => {
    const ok = await confirm();
    if (ok && href) {
      window.open(href);
    }
  };

  return (
    <>
      <Card className="flex">
        <div className="flex-none">
          <Avatar
            onClick={handleConfirm}
            className="cursor-pointer border size-12 m-auto bg-muted-background dark:bg-foreground hover:border-1 hover:border-muted-foreground/30 hover:shadow-md transition-all duration-300 ease-out"
          >
            <AvatarImage
              src={logoUrl}
              alt={company}
              className="object-contain"
            />
            <AvatarFallback>{company[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow ml-4 min-w-0">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-x-2">
              <h3 className="font-semibold leading-none text-xs sm:text-sm">
                {company}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-right whitespace-nowrap">
                {location}
              </div>
            </div>
          </CardHeader>

          <div className="pb-4">
            {roles.map((role, index) => (
              <RoleItem
                key={role.id}
                role={role}
                isLast={index === roles.length - 1}
              />
            ))}
          </div>
        </div>
      </Card>
      <ConfirmModal />
    </>
  );
};