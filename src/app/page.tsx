"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { lexuidToString, stringToLexuid } from "@/lib/lexuid";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState<"lexuid" | "bigint">("lexuid");

  const handleConvert = () => {
    try {
      if (mode === "lexuid") {
        // Convert lexuid to bigint
        const bigintValue = stringToLexuid(input);
        setResult(bigintValue.toString());
      } else {
        // Convert bigint to lexuid
        const bigintValue = BigInt(input);
        setResult(lexuidToString(bigintValue));
      }
    } catch (error) {
      setResult("Invalid input");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>LexUID ⇄ BigInt Converter</CardTitle>
          <CardDescription>
            Convert between LexUID and BigInt formats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setMode(mode === "lexuid" ? "bigint" : "lexuid");
                setInput("");
                setResult("");
              }}
            >
              {mode === "lexuid" ? "LexUID → BigInt" : "BigInt → LexUID"}
            </Button>
          </div>
          <div className="space-y-2">
            <Input
              placeholder={mode === "lexuid" ? "Enter LexUID" : "Enter BigInt"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button className="w-full" onClick={handleConvert}>
              Convert
            </Button>
          </div>
          {result && (
            <div className="rounded-lg bg-muted p-4 font-mono">{result}</div>
          )}
        </CardContent>
      </Card>
      <footer className="mt-8 text-sm text-muted-foreground">
        made with ❤️ by{" "}
        <a
          href="https://github.com/alex1092"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-primary">Alex</span>
        </a>
      </footer>
    </div>
  );
}
