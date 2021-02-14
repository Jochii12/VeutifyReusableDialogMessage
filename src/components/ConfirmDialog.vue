<template>
    <div>
        <v-dialog
            v-model="$root.dialog"
            :max-width="$root.dialogOptions.width"
            persistent
        >
            <v-card>
            <v-toolbar dark :color="$root.dialogOptions.color" dense flat>
                <v-toolbar-title class="text-body-2 font-weight-bold">
                {{ $root.title }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text
                v-show="!!$root.message"
                class="pa-4 black--text"
                v-html="$root.message"
            ></v-card-text>
            <v-card-actions class="pt-3">
                <v-spacer></v-spacer>
                <v-btn
                v-if="!$root.dialogOptions.noconfirm"
                text
                class="body-2 font-weight-bold"
                @click.native="$root.cancel"
                >Cancel</v-btn
                >
                <v-btn
                color="primary"
                class="body-2 font-weight-bold"
                text
                @click.native="$root.agree"
                >OK</v-btn
                >
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    created (){
    }
}
</script>