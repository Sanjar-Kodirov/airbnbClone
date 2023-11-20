'use client'

import Heading from '@/src/app/components/Heading'
import CategoryInput from '@/src/app/components/inputs/CategoryInput'
import Counter from '@/src/app/components/inputs/Counter'
import CountrySelect from '@/src/app/components/inputs/CountrySelect'
import ImageUpload from '@/src/app/components/inputs/ImageUpload'
import Modal from '@/src/app/components/modals/Modal'
import { categories } from '@/src/app/components/navbar/Categories'
import useRentModal from '@/src/app/hooks/useRentModal'
import React, { useMemo, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'

import Map from '@/src/app/components/Map'
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
const RentModal = () => {

  const rentModal = useRentModal()
  const [step, setStep] = useState(STEPS.CATEGORY)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }
  });

  const location = watch('location');
  const category = watch('category');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }


  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step])


  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }


  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) =>
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue('location', value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subtitle="What amenitis do you have?"
        />
        <Counter
          onChange={(value) => setCustomValue('guestCount', value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests do you allow?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('roomCount', value)}
          value={roomCount}
          title="Rooms"
          subtitle="How many rooms do you have?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('bathroomCount', value)}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
        />
      </div>
    )
  }


  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
          onChange={(value: any) => setCustomValue('imageSrc', value)}
          value={imageSrc} />
      </div>
    )
  }
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
      title="Airbnb your home"
      body={bodyContent}
    />
  )
}

export default RentModal