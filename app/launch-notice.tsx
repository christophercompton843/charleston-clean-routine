export default function LaunchNotice() {
  return (
    <aside className="launch-notice" aria-label="Charleston Clean Routine service launch update">
      <style>{`
        .launch-notice {
          position: relative;
          z-index: 90;
          width: 100%;
          padding: 9px 20px;
          border-bottom: 1px solid rgba(255,255,255,.12);
          background: var(--harbor-black, #041e1d);
          color: #f5f8f7;
          text-align: center;
          font-size: 12px;
          line-height: 1.45;
          letter-spacing: .01em;
        }
        .launch-notice strong {
          font-weight: 750;
        }
        .launch-notice span {
          margin-left: 7px;
          color: #c5d7d3;
        }
        @media (max-width: 620px) {
          .launch-notice {
            padding: 9px 16px;
            font-size: 11px;
          }
          .launch-notice strong,
          .launch-notice span {
            display: block;
          }
          .launch-notice span {
            margin: 2px 0 0;
          }
        }
      `}</style>
      <strong>Charleston Clean Routine opens September 3.</strong>
      <span>Residential pricing and advance booking are available now.</span>
    </aside>
  );
}