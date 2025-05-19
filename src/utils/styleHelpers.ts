type LegacyStyleType = 'homepage' | 'portfolio' | 'viz' | 'lightbox';

/**
 * Combines modern and legacy styles for components in transition
 * @param modernClass - The modern CSS class name
 * @param legacyType - The type of legacy styles to include
 * @returns Combined class string
 */
export const withLegacyStyles = (modernClass: string, legacyType: LegacyStyleType): string => {
  return `${modernClass} legacy-${legacyType}`;
};

/**
 * Creates a style configuration for components that are being migrated
 * @param isModern - Whether to use modern styles
 * @param componentName - The name of the component for modern styles
 * @param legacyType - The type of legacy styles to fall back to
 * @returns Class string based on migration status
 */
export const getMigratedStyles = (
  isModern: boolean,
  componentName: string,
  legacyType: LegacyStyleType
): string => {
  if (isModern) {
    return `modern-${componentName}`;
  }
  return `legacy-${legacyType}`;
}; 