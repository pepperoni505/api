import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Airport {
  @ApiProperty({ description: 'The airport ICAO', example: 'KLAX' })
  icao: string;

  @ApiProperty({ description: 'The type of the airport', enum: ['large_airport', 'medium_airport', 'small_airport']})
  type: string;

  @ApiProperty({ description: 'The name of the airport', example: 'Los Angeles International Airport' })
  name: string;

  @ApiProperty({ description: 'The latitude of the airport', example: 33.94250107 })
  lat: number;

  @ApiProperty({ description: 'The longitude of the airport', example: -118.4079971 })
  lon: number;

  @ApiProperty({ description: 'The elevation of the airport', example: 125 })
  elevation: number;

  @ApiProperty({ description: 'The continent the airport is in', example: 'NA' })
  continent: string;

  @ApiProperty({ description: 'The country the airport is in', example: 'US' })
  country: string;

  @ApiProperty({ description: 'The transition altitude of the airport', example: 18000 })
  transAlt: number;
}

export class AirportBatchDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'The ICAOs to fetch', example: ['KLAX', 'KSFO']})
  icaos: string[];
}
