import logo from './logo.svg'
import './App.css'

import { Form, Formik, Field } from 'formik'
import validator from 'validator'

function App() {
  const validateForm = (values) => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Имя обязателено'
    } else if (values.name.length > 15 || values.name.length < 4) {
      errors.name = 'Имя должно быть от 3-х до 15-ти символов'
    }

    if (!values.email) {
      errors.email = 'Email обязателен'
    } else if (!validator.isEmail(values.email)) {
      errors.email = 'Ошибочный адрес почты'
    }

    if (!values.phoneNo) {
      errors.phoneNo = 'Телефон обязателен'
    } else if (!validator.isMobilePhone(values.phoneNo, 'ru-RU', { strictMode: true })) {
      errors.phoneNo = 'Ошибочный номер - +7XXXXXXXXXX'
    }

    if (!values.password) {
      errors.password = 'Пароль обязателен'
    } else if (!validator.isStrongPassword(values.password)) {
      errors.password = 'Минимум 6 символов (букв, цифр и спец. знаков)'
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Проверочный пароль обязателен'
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают'
    }

    return errors
  }

  return (
    <div className='container container-fluid'>
      <div className='row wrapper'>
        <div className='col-10 col-lg-5'>
          <Formik
            className='shadow-lg'
            initialValues={{ name: '', email: '', phoneNo: '', password: '' }}
            validate={validateForm}
            // onSubmit={submitHandler}
          >
            {(formik) => (
              <Form className='shadow-lg'>
                <h1 className='mb-4'>Регистрация</h1>
                <div className='form-group mt-4'>
                  <label htmlFor='name'>Имя</label>
                  <Field
                    name='name'
                    type='text'
                    className={
                      formik.touched.name && formik.errors.name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <div className='invalid-feedback'>{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className='form-group mt-4'>
                  <label htmlFor='email'>Email</label>
                  <Field
                    name='email'
                    type='email'
                    className={
                      formik.touched.email && formik.errors.email
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <div className='invalid-feedback'>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className='form-group mt-4'>
                  <label htmlFor='phoneNo'>Телефон</label>
                  <Field
                    name='phoneNo'
                    type='text'
                    className={
                      formik.touched.phoneNo && formik.errors.phoneNo
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />

                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <div className='invalid-feedback'>{formik.errors.phoneNo}</div>
                  ) : null}
                </div>

                <div className='form-group mt-4'>
                  <label htmlFor='password'>Придумайте пароль</label>
                  <Field
                    name='password'
                    type='password'
                    className={
                      formik.touched.password && formik.errors.password
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className='invalid-feedback'>{formik.errors.password}</div>
                  ) : null}
                </div>

                <div className='form-group mt-4'>
                  <label htmlFor='confirmPassword'>Пароль ещё раз</label>
                  <Field
                    name='confirmPassword'
                    type='password'
                    className={
                      formik.touched.confirmPassword && formik.errors.confirmPassword
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                  />

                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className='invalid-feedback'>{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>

                <div className='form-group'>
                  <button type='submit' className='btn btn-block btn-primary py-3 mt-4 w-100'>
                    Зарегистрироваться
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default App
