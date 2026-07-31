import * as React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ExpandableContent.scss";

interface ExpandableContentProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => {
  const [isVisible, setIsVisible] = React.useState(defaultExpanded);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState<number | null>(null);

  const updateHeight = React.useCallback(() => {
    if (innerRef.current) {
      setContentHeight(innerRef.current.scrollHeight);
    }
  }, []);

  React.useLayoutEffect(() => {
    updateHeight();
  }, [children, isVisible, updateHeight]);

  React.useEffect(() => {
    if (!innerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(innerRef.current);
    return () => resizeObserver.disconnect();
  }, [updateHeight]);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  const contentId = `content-${title.toLowerCase().replace(/\s+/g, "-")}`;

  // Until height is measured, leave expanded content unconstrained so
  // defaultExpanded content is fully visible on first paint (no max-height: 0).
  const maxHeight = !isVisible
    ? 0
    : contentHeight === null
      ? "none"
      : contentHeight;

  return (
    <div className="content-block">
      <div className="flex-title-row">
        <h3>{title}</h3>
        <div className="icon-item">
          <button
            className="show-content-btn"
            onClick={toggleContent}
            aria-expanded={isVisible}
            aria-controls={contentId}
            aria-label={`${isVisible ? "Piilota" : "Näytä"} ${title} sisältö`}
          >
            {isVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
        </div>
      </div>
      <div
        className={`expandable-content ${isVisible ? "expanded" : "collapsed"}`}
        id={contentId}
        style={{ maxHeight }}
      >
        <div ref={innerRef} className="content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};
