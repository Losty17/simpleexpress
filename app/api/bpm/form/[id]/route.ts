import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json({
        'rows': [
          {
            'index': 0,
            'fields': [
              {
                'name': "campo 1",
                'type': "int",
                'column': 0,
                'colspan': 12,
              }
            ]
          }
        ]
      })
}