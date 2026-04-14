import { ImageResponse } from 'next/og';
import { siteConfig } from '@/content/site.config';

export const runtime = 'edge';
export const alt = 'Master Almaraz - Consultoría Patrimonial';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F2F57',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Acento dorado superior */}
        <div 
          style={{ 
            display: 'flex', 
            borderBottom: '4px solid #C9A35A', 
            paddingBottom: '20px', 
            marginBottom: '40px' 
          }}
        >
          <span 
            style={{ 
              fontSize: 48, 
              fontWeight: 'bold', 
              color: '#C9A35A', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase' 
            }}
          >
            {siteConfig.businessName}
          </span>
        </div>
        
        {/* Tagline Principal */}
        <div 
          style={{ 
            fontSize: 72, 
            fontWeight: '900', 
            color: 'white', 
            lineHeight: 1.1, 
            marginBottom: '30px', 
            maxWidth: '1000px',
            letterSpacing: '-0.02em'
          }}
        >
          {siteConfig.tagline}
        </div>
        
        {/* Ubicación en la parte inferior */}
        <div 
          style={{ 
            fontSize: 32, 
            color: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto'
          }}
        >
          📍 {siteConfig.location.address}
        </div>
      </div>
    ),
    { ...size }
  );
}