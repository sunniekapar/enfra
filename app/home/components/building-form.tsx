'use client';

import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Building2,
  Hospital,
  University,
  Store,
  Landmark,
  Building,
} from 'lucide-react';
import { JSX } from 'react';
import { Input } from '@/components/ui/input';
import { insertBuildingFormSchema } from '@/db/schema';
import { Button } from '@/components/ui/button';

const buildings: { label: string; value: string; icon: JSX.Element }[] = [
  { label: 'Residential', value: 'residential', icon: <Building2 /> },
  {
    label: 'Commercial',
    value: 'commercial',
    icon: <Store />,
  },
  {
    label: 'Civic',
    value: 'civic',
    icon: <Landmark />,
  },
  { label: 'Educational', value: 'educational', icon: <University /> },
  { label: 'Healthcare', value: 'healthcare', icon: <Hospital /> },
  {
    label: 'Community',
    value: 'community',
    icon: <Building />,
  },
];

export default function BuildingForm() {
  const form = useForm<z.infer<typeof insertBuildingFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(insertBuildingFormSchema),
  });

  function onSubmit(values: z.infer<typeof insertBuildingFormSchema>) {
    console.log(values);
  }

  return (
    <>
      <h1 className="font-bold text-4xl mb-7">Create your building.</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-12 gap-3.5">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-7">
                  <FormLabel>Building name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Daphne Cockwell Complex..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="type"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-5">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Building type</FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a building" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {buildings.map((building) => (
                        <SelectItem value={building.value} key={building.value}>
                          <div className="flex items-center gap-2.5">
                            {building.icon}
                            {building.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              name="lon"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-3">
                  <FormLabel>
                    Longitude{' '}
                    <span className="text-sm text-primary/60">
                      &#40;&#176;&#41;
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="lat"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-3">
                  <FormLabel>
                    Latitude{' '}
                    <span className="text-sm text-primary/60">
                      &#40;&#176;&#41;
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="occupancy"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-6">
                  <FormLabel>Occupancy</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="col-span-12">
              <h2 className="font-semibold text-2xl">
                Dimensions{' '}
                <span className="text-sm text-primary/60">&#40;ft.&#41;</span>
              </h2>
            </div>

            <FormField
              name="height"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4">
                  <FormLabel>Height</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="length"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4">
                  <FormLabel>Length</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="width"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4">
                  <FormLabel>Width</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-3.5">
            <Button type="submit" className="w-full">
              Create building
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
