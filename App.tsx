import React from 'react';
import ManualPage from './components/ManualPage';
import { MANUAL_CONTENT } from './data/manualContent';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { PageRender, useSmartPrint, Typography, Paragraph, Image, PageBreak } from 'react-smart-print';

function App() {
  const { config, renderAndPrint, isLoading } = useSmartPrint("superlive-manual");

  return (
    <>
      <Header
        content={MANUAL_CONTENT}
        onPrint={renderAndPrint}
        isPrinting={isLoading}
      />
      <div className="pt-20">
        <div className="max-w-[1000px] mx-auto">
          {MANUAL_CONTENT.map((pageData) => (
            <ManualPage key={pageData.page} data={pageData} />
          ))}
        </div>
      </div>

      {/* React Smart Print Engine */}
      <PageRender
        {...config}
        paperOptions={{
          paperSize: "a4",
          orientation: "portrait",
          margin: { top: 15, right: 15, bottom: 25, left: 15 }
        }}
        header={(currentPage) => (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            paddingBottom: '5px',
            marginBottom: '10px',
            fontSize: '9pt',
            color: '#666'
          }}>
            <span>Superlive Plus/Max Manuale Utente</span>
            <span>Pagina {currentPage}</span>
          </div>
        )}
        footer={() => (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            borderTop: '1px solid #eee',
            paddingTop: '5px',
            marginTop: '10px',
            fontSize: '8pt',
            color: '#999'
          }}>
            <span>© 2025 TVT Digital Technology Co., Ltd. Tutti i diritti riservati.</span>
          </div>
        )}
      >
        <Typography bold fontSize={24} align="center" marginBottom={30}>
          SuperliveMax Manuale Utente
        </Typography>

        {MANUAL_CONTENT.map((pageData) => (
          <div key={`print-page-${pageData.page}`}>
            {pageData.blocks.map((block, bIdx) => {
              if (/^\d+\s+[A-Z]/.test(block) || /^\d+\.\d+/.test(block)) {
                return <Typography key={bIdx} bold fontSize={16} marginTop={15} marginBottom={8} color="#2563eb">{block}</Typography>;
              }
              if (block.length < 50 && (block.toUpperCase() === block)) {
                return <Typography key={bIdx} bold fontSize={18} marginTop={20} marginBottom={10}>{block}</Typography>;
              }
              return <Paragraph key={bIdx} align="justify" fontSize={10} marginBottom={8}>{block}</Paragraph>;
            })}

            {pageData.images && pageData.images.map((imgSrc, iIdx) => (
              <Image
                key={iIdx}
                src={imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`}
                alt={`Pagina ${pageData.page} Immagine ${iIdx + 1}`}
                width="80%"
                align="center"
                marginTop={10}
                marginBottom={10}
              />
            ))}
            <PageBreak />
          </div>
        ))}
      </PageRender>

      <ScrollToTop />
    </>
  );
}

export default App;