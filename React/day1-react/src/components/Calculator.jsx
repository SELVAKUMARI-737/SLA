import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleNumberClick = (num) => {
    if (display === "0" || waitingForSecond) {
      setDisplay(num);
      setWaitingForSecond(false);
    } else if (display.length < 12) {
      setDisplay(display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForSecond) {
      setDisplay("0.");
      setWaitingForSecond(false);
      return;
    }
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const handleOperatorClick = (op) => {
    if (operator && !waitingForSecond) {
      handleEqualClick(true);
      setTimeout(() => {
        setFirstValue(Number(display));
        setOperator(op);
        setWaitingForSecond(true);
        setExpression(display + " " + op);
      }, 0);
      return;
    }
    setExpression(display + " " + op);
    setFirstValue(Number(display));
    setOperator(op);
    setWaitingForSecond(true);
  };

  const handleEqualClick = (chain = false) => {
    if (firstValue === null || operator === null) return;
    const secondValue = Number(display);
    let result = 0;
    if (operator === "+") result = firstValue + secondValue;
    else if (operator === "-") result = firstValue - secondValue;
    else if (operator === "×") result = firstValue * secondValue;
    else if (operator === "÷") {
      if (secondValue === 0) {
        setDisplay("Error");
        setExpression("");
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecond(false);
        return;
      }
      result = firstValue / secondValue;
    }
    if (!chain) setExpression(firstValue + " " + operator + " " + secondValue + " =");
    const rounded = parseFloat(result.toPrecision(10));
    setDisplay(String(rounded));
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  const handleClear = () => {
    setDisplay("0");
    setExpression("");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  const handleBackspace = () => {
    if (waitingForSecond || display === "Error") { setDisplay("0"); return; }
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  };

  const handleButtonClick = (btn) => {
    if (!isNaN(btn)) handleNumberClick(btn);
    else if (btn === ".") handleDecimal();
    else if (btn === "C") handleClear();
    else if (btn === "⌫") handleBackspace();
    else if (btn === "=") handleEqualClick(false);
    else handleOperatorClick(btn);
  };

  const t = isDark ? theme.dark : theme.light;

  const topButtons = ["c", "μ", "sin", "deg"];
  const mainButtons = [
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "÷",
    "0", ".", "=", "×",
  ];

  const isOp = (b) => ["+", "-", "×", "÷"].includes(b);
  const isEq = (b) => b === "=";
  const isFunc = (b) => ["c", "μ", "sin", "deg", "Ac", "⌫"].includes(b);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: isDark ? "#0e0e1a" : "linear-gradient(145deg,#ddeeff,#c5e8fa)", transition: "background 0.4s", fontFamily: "'SF Pro Display', 'Segoe UI', sans-serif" }}>
      <div style={{ width: 300, borderRadius: 36, overflow: "hidden", background: t.cardBg, boxShadow: t.cardShadow, transition: "all 0.4s" }}>

        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px 10px" }}>
          <span style={{ fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600, color: t.labelColor }}>Calculator</span>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{ width: 46, height: 26, borderRadius: 13, border: "none", cursor: "pointer", background: isDark ? "#2a2a4a" : "#d4e8f8", position: "relative", transition: "background 0.3s", outline: "none" }}
          >
            <div style={{ position: "absolute", top: 4, left: isDark ? 24 : 4, width: 18, height: 18, borderRadius: "50%", background: "#4dabf7", transition: "left 0.3s" }} />
          </button>
        </div>

        {/* Display */}
        <div style={{ margin: "0 16px 8px", borderRadius: 22, background: t.displayBg, padding: "14px 20px 18px", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", gap: 4 }}>
          <div style={{ fontSize: 13, color: t.exprColor, fontFamily: "monospace", minHeight: 18 }}>{expression || "\u00a0"}</div>
          <div style={{ fontSize: display.length > 10 ? 22 : display.length > 7 ? 28 : 38, fontWeight: 700, color: t.displayText, fontFamily: "monospace", wordBreak: "break-all", textAlign: "right", lineHeight: 1.1 }}>
            {expression && !operator ? "=" : ""}{display}
          </div>
        </div>

        {/* Function row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, padding: "6px 16px 4px" }}>
          {["Ac", "⌫", "/", "*"].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === "Ac") handleClear();
                else if (btn === "⌫") handleBackspace();
                else if (btn === "/") handleOperatorClick("÷");
                else if (btn === "*") handleOperatorClick("×");
              }}
              style={{ height: 36, borderRadius: 10, fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", background: t.funcBg, color: t.funcText, transition: "all 0.2s", letterSpacing: 0.3 }}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Main keypad */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, padding: "8px 16px 20px" }}>
          {mainButtons.map((btn, i) => {
            const active = operator === btn && waitingForSecond;
            let bg = t.numBg;
            let color = t.numText;
            let shadow = t.numShadow;
            if (isOp(btn)) { bg = active ? "#4dabf7" : t.opBg; color = active ? "#fff" : t.opText; shadow = t.opShadow; }
            if (isEq(btn)) { bg = "#4dabf7"; color = "#fff"; shadow = "0 4px 18px rgba(77,171,247,0.45)"; }
            return (
              <button
                key={btn + i}
                onClick={() => handleButtonClick(btn)}
                style={{
                  height: 62, borderRadius: 18, fontSize: 21, fontWeight: 600, border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "monospace", background: bg, color, boxShadow: shadow,
                  transition: "all 0.15s", transform: "scale(1)"
                }}
                onMouseDown={e => e.currentTarget.style.transform = "scale(0.91)"}
                onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const theme = {
  light: {
    cardBg: "rgba(244,246,251,1)",
    cardShadow: "0 20px 60px rgba(80,160,240,0.16), 0 4px 16px rgba(80,160,240,0.08)",
    labelColor: "#a0b4cc",
    displayBg: "#ffffff",
    displayText: "#1a2a3a",
    exprColor: "#a0b8cc",
    funcBg: "#e8f0fb",
    funcText: "#4a7ab5",
    numBg: "#ffffff",
    numText: "#1a2a3a",
    numShadow: "0 2px 8px rgba(100,150,220,0.13)",
    opBg: "#e8f2fd",
    opText: "#2a7fd4",
    opShadow: "0 2px 8px rgba(60,160,210,0.14)",
  },
  dark: {
    cardBg: "#1c1c2e",
    cardShadow: "0 20px 60px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.4)",
    labelColor: "#555875",
    displayBg: "#13132a",
    displayText: "#e8eaf6",
    exprColor: "#4a4a6a",
    funcBg: "#252545",
    funcText: "#6a6aaa",
    numBg: "#252545",
    numText: "#e8eaf6",
    numShadow: "0 2px 8px rgba(0,0,0,0.3)",
    opBg: "#1e2040",
    opText: "#5aa8f0",
    opShadow: "0 2px 8px rgba(0,0,0,0.25)",
  },
};

export default Calculator;