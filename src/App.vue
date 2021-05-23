<template>
  <v-app>
    <v-main>
      <v-container
        fill-height
      >
        <v-row
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
          >
            <div
              class="text-h5 text-sm-h4 text-center mb-10"
            >
              Password Generator
            </div>
            <v-card
              class="my-4"
            >
              <v-card-text
                class="px-8 py-12"
              >
                <v-text-field
                  append-icon="mdi-content-copy"
                  color="red"
                  hide-details
                  outlined
                  readonly
                  ref="password"
                  spellcheck="false"
                  :value="password"
                  @click:append="$refs.password.focus()"
                  @focus="copy($event)"
                  class="text-h6 font-weight-regular"
                />
              </v-card-text>
            </v-card>
            <v-card
              class="my-4"
            >
              <v-card-text
                class="px-8 py-10"
              >
                <v-row>
                  <v-col
                    cols="10"
                    sm="11"
                  >
                    <div>
                      <v-slider
                        v-model="length"
                        color="red"
                        hide-details
                        label="Length"
                        max="100"
                        min="10"
                        thumb-label="always"
                        thumb-size="24"
                        track-color="grey"
                        class="mb-6"
                      />
                    </div>
                    <div>
                      <v-checkbox
                        v-model="numbers"
                        color="red"
                        dense
                        hide-details
                        label="Numbers"
                      />
                    </div>
                    <div>
                      <v-checkbox
                        v-model="symbols"
                        color="red"
                        dense
                        hide-details
                        label="Symbols"
                      />
                    </div>
                  </v-col>
                  <v-col
                    cols="2"
                    sm="1"
                    class="text-center"
                  >
                    <v-btn
                      icon
                      @click="refresh"
                    >
                      <v-icon>
                        mdi-refresh
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Generate from '@memochou1993/password-generator-js';

export default {
  name: 'App',
  data: () => ({
    length: 10,
    letters: true,
    symbols: false,
    numbers: false,
  }),
  computed: {
    password() {
      return Generate.generate({
        length: this.length,
        letters: this.letters,
        symbols: this.symbols,
        numbers: this.numbers,
      });
    },
  },
  methods: {
    refresh() {
      this.letters = false;
      this.letters = true;
    },
    copy(event) {
      event.target.select();
      document.execCommand('copy');
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-text-field__slot,
::v-deep input {
  cursor: pointer;
}
::v-deep .v-text-field--outlined.v-input--is-focused fieldset,
::v-deep .v-text-field--outlined.v-input--has-state fieldset {
  border: 1px solid currentColor;
}
</style>
