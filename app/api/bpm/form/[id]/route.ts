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
                'colspan': 6,
              },
              {
                'name': "campo 2",
                'type': "int",
                'column': 1,
                'colspan': 6,
              },
            ]
          },
          {
            'index': 1,
            'fields': [
              {
                'name': "campo 1",
                'type': "int",
                'column': 1,
                'colspan': 12,
              }
            ]
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' // CORS
        }
      })
}